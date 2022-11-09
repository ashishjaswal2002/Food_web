import React,{useRef,useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = (props)=>{
    const [amountisValid,setAmountisValid]=useState(true);
    const amountInputRef = useRef();
    const submitHandler = (e) =>{
     e.preventDefault();
           
            const enteredAmount = amountInputRef.current.value;
          const enteredAmountNumber = +enteredAmount;

          if(enteredAmount.trim().length ===0 || enteredAmountNumber<1 || enteredAmountNumber >5){
            setAmountisValid(false);
            return;
          }

          props.onAddToCart(enteredAmountNumber);
        };


    return(
       <form className={classes.form} onSubmit={submitHandler}>
    <Input ref={amountInputRef} label="Amount" input={{id:'amount',
    type:'number',
    min:'1',
    max:'5',
    steps:'1',
    defaultValue:'1',

    }}/>
        <button >+ Add</button>
        {!amountisValid && <p>Please enter a valid Amount (1-5)</p>}
       </form>
    )


    
}
export default MealItemForm;