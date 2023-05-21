import classes from "./Cards.module.css"
import { GoLocation, GoMail } from "react-icons/go";
import {FiPhoneCall} from "react-icons/fi"
const Cards =()=>{
   return(
    <div className={classes.cards}>
     <div className={classes.card}>
      <div className={classes.cardIcon}><GoLocation /></div>
      <h4>Adresa:</h4>
      <div className={classes.text}>Cazin, Ćoralići 190</div>
     </div>
     <div className={classes.card}>
      <div className={classes.cardIcon}><FiPhoneCall /></div>
      <h4>Telefon:</h4>
      <div className={classes.text}>+61 759 944</div>
      <div className={classes.text}>+62 322 445</div>
     </div>
     <div className={classes.card}>
      <div className={classes.cardIcon}><GoMail /></div>
      <h4>E-mail adresa:</h4>
      <div className={classes.text}><email>info@limomontaza.com</email></div>
     </div>
    </div>
   )
}
export default Cards