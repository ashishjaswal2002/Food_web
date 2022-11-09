import { useContext } from "react";
import CartIcon from "../Cart/Carticon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../Store/cart-context";
const HeaderCartButton= props=>{
     
  const cardCtx =   useContext(CartContext);
   const numberofCartItems = cardCtx.items.reduce((curr,item)=>{
    return curr+item.amount;
   },0);
  return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberofCartItems}</span>


        </button>
    )
}
export default HeaderCartButton;