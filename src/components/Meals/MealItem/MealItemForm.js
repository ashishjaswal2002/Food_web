import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = (props)=>{

    return(
       <form className={classes.form}>
    <Input label="Amount" input={{id:'amount',
    type:'number',
    min:'1',
    max:'5',
    steps:'1',
    defaultValue:'1',

    }}/>
        <button>+ Add</button>
       </form>
    )


    
}
export default MealItemForm;