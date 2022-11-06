import classes  from './MealItemForm.module.css';
import MealItemForm from './MealItemForm';

const MealItem =props =>{
  const price = `$${props.price.toFixed(2)}`;

  return <li>
    <div>
        {/* Name of the data */}
        <h3>{props.names}</h3>
        <div className={classes.description}>{props.descriptions}</div>
        <div className={classes.price}>{price}</div>
    </div>
    <div>
     <MealItemForm/>
    </div>
  </li>

};
export default MealItem;