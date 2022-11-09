

import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';

import MealItem from './MealItem/MealItem'

const DUMMY_MEALS = [
    {
      key: 1,
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
        key: 2,
    
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
        key: 3,
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
        key: 4,
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
 
const AvailableMeals = ()=>{
    const mealsList = DUMMY_MEALS.map(meal=><MealItem id={meal.id}key={meal.key} names={meal.name} price ={meal.price} descriptions = {meal.description} />);
   
    return(
        <>  
       
        <section className={classes.meals} >
            <Card>
            <ul>{mealsList}</ul>
            </Card>
        </section>
       
   
    </>
    )
  
};
export default AvailableMeals;
