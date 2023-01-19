import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { CONTINENTS } from "../../../data/Continents";
import { gameActions } from "../../../store/game-slice";
import classes from "./Continents.module.css";
import ContinentTile from "./ContinentTile";

const Continents = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const game = useSelector((state) => state.game);
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

  const onContinentSet = (continent)=>{
    dispatch(gameActions.setContinent({continent: continent}))
  }

  return (
    <div>
      <div className={classes.pageTitle}>
        {t("continent1",{count:1})}
      </div>
      <div className={classes.item}>
        {imgLoaded ? (
          CONTINENTS.map((item) => (
            <div className={classes.tile} key={item.name}>
              <ContinentTile shape={item.shape} name={item.name} continentSet={onContinentSet}/>
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
};

export default Continents;
