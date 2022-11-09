import { useContext } from 'react';
import classes  from './MealItemForm.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/cart-context';

const MealItem =props =>{
 const cartCtx=  useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
 const addToCartHandler = amount =>{
  cartCtx.addItem({
    id:props.id,
    name:props.name,
    amount:amount,
    price:props.price,
  });


 };
  return <li>
    <div>
        {/* Name of the data */}
        <h3>{props.names}</h3>
        <div className={classes.description}>{props.descriptions}</div>
        <div className={classes.price}>{price}</div>
    </div>
    <div>
     <MealItemForm onAddToCart  = {addToCartHandler}/>
    </div>
  </li>

};
export default MealItem;