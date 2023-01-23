import { useDispatch, useSelector } from "react-redux";
import Card from "../../UI/Card";
import Answer from "./Answer";
import classes from "./QuestionCard.module.css";
import { COUNTRIES } from "../../../data/CountryData";
import { gameActions } from "../../../store/game-slice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const QestionCard = () => {
  const game = useSelector((state) => state.game);
  const {t}=useTranslation('countries')
  const dispatch = useDispatch();
  const continent = game.game.continents;
  
  useEffect(() => {
    dispatch(
      gameActions.setQuestions({ countries: COUNTRIES[continent[0]]})
    );
  }, [continent, dispatch]);


  const randomCountries = game.game.countries; 
   
  randomCountries.map((x)=>{

    let country = COUNTRIES[continent[0]][x];

    return console.log(`${t(country.country)}`);
})
  return (
    <div className={classes.main}>
      <Card>
        <div className={classes.content}>
          <div className={classes.title}>Pytanie nr 1</div>
          <div className={classes.question}>
            Stolicą jakiego kraju jest Andora?
          </div>
          <div className={classes.action}>
            <Answer>odp1</Answer>
            <Answer>odp2</Answer>
            <Answer>odp3</Answer>
            <Answer>odp4</Answer>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QestionCard;
