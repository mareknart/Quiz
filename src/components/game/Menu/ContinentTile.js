import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ContinentTile.module.css'

const ContinentTile = (props) =>{
    const[isClicked, setIsClicked]=useState(false);
    const {t}=useTranslation('continents')
    const onClickHandler = ()=>{
        setIsClicked(true);
        props.continentSet(props.name);
    }

    return(
        <div className={classes.tile} onClick={onClickHandler}>
            <div className={classes.content}>
            <div className={classes.title}>{t(props.name)}</div>
            <img className={classes.img} src={props.shape} alt={props.name}/>
            </div>
        </div>
    )
}

export default ContinentTile;