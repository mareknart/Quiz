import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CONTINENTS } from "../../../data/Continents";
import { gameActions } from "../../../store/game-slice";
import LoadingSpinner from "../../UI/LoadingSpinner";
import classes from "./Continents.module.css";
import ContinentTile from "./ContinentTile";

const Continents = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [contNumber, setContNumber] = useState(0);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const history = useHistory();
  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.shape;
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.shape);
          }, 10);
        loadImg.onerror = (err) => reject(err);
      });
    };
    Promise.all(CONTINENTS.map((image) => loadImage(image)))
      .then(() => setImgLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  const diffLevel = game.game.difficulty;

  useEffect(() => {
    if (diffLevel === '1' && contNumber === 1) {
      
      history.push("/game");
    }
    if (diffLevel === '2' && contNumber === 2) {
      
      history.push("/game");
    } 
  }, [contNumber, game.game.continents, diffLevel, history]);

  const onContinentSet = (continent) => {
    dispatch(gameActions.setContinent({ continent: continent}));
    setContNumber((previousState) => previousState + 1);
  };

  return (
    <div>
      {diffLevel === '1' ? (
        <div className={classes.pageTitle}>{t("continent1", { count: 1 })}</div>
      ) : (
        <div className={classes.pageTitle}>{t("continent2", { count: 2 })}</div>
      )}

      <div className={classes.item}>
        {imgLoaded ? (
          CONTINENTS.map((item) => (
            <div className={classes.tile} key={item.name}>
              <ContinentTile
                shape={item.shape}
                name={item.name}
                continentSet={onContinentSet}
              />
            </div>
          ))
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

export default Continents;
