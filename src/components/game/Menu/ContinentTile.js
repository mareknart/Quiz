import { useTranslation } from 'react-i18next';
import classes from './ContinentTile.module.css'

const ContinentTile = (props) =>{
    const {t}=useTranslation('continents')
    return(
        <div className={classes.tile}>
            <div className={classes.content}>
            <div className={classes.title}>{t(props.name)}</div>
            <img className={classes.img} src={props.shape} alt={props.name}/>
            </div>
        </div>
    )
}

export default ContinentTile;