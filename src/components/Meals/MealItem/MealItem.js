import classes  from './MealItem.module.css';

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
     
    </div>
  </li>

};
export default MealItem;