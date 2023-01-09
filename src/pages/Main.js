import MenuTile from "../components/game/Menu/MenuTile";
import classes from "./Main.module.css";

const LEVEL = [
  {
    name: "Uczeń",
    description:
      "Na tym poziomie trudności możesz wybrać jeden kontynent. Pytania będą obejmować nazwy Państw i ich stolice.",
  },
  {
    name: "Średniak",
    description:
      "Na tym poziomie trudności wybiera się dwa kontynenty. Do nazw państw i stolic dochodzą flagi państwowe.",
  },
  {
    name: "Mistrz",
    description:
      "Ten poziom trudności zawiera pytania ze wszystkich kontynentów oraz dodatkowo kształty państw.",
  },
];

const onClickHandler = (name)=>{
    console.log(name);
}

const Main = () => {
  return (
    <main className={classes.main}>
      {LEVEL.map((item) => (
        <div className={classes.item} onClick={()=>onClickHandler(item.name)}>
        <MenuTile name={item.name} description={item.description} />
        </div>
      ))}
    </main>
  );
};

export default Main;
