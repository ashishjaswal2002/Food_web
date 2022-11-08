import Modal from '../UI/Modal';
import classes from './Cart.module.css';
const Cart = props =>{
    const cartItems =(<ul className={classes['cart-items']}> {[{
       key:1,
        name:'Sushi',
        amount:'2',
        price:12.99,
    }].map((item)=><li key='1'>{item.name}</li>)}</ul>);

    return(
  
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>45.23</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>

             <button className={classes.button}>Order</button>
            </div>
        </Modal>
   
    )


};
export default Cart;