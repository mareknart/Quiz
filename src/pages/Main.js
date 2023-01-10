import { useState } from "react";
import MenuTile from "../components/game/menu/MenuTile";
import Player from "../components/game/menu/Player";
import classes from "./Main.module.css";


const onClickHandler = (name)=>{
    console.log(name);
}



const Main = (props) => {
  const [playerName, setPlayerName]=useState(false);
  const [language, setLanguage] = useState(null);
  const [difficulty, setDifficulty]= useState(0);
  return (

    <main className={classes.main}>
      <Player/>
      {/* {LEVEL.map((item) => (
        <div className={classes.item} onClick={()=>onClickHandler(item.name)}>
        <MenuTile name={item.name} description={item.description} />
        </div>
      ))} */}
    </main>
  );
};

export default Main;
