import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart.js";
import CartProvider from "./Store/CartProvider";



function App() {
  const [cartIsShown,setCartisShown] = useState(false);

  const showCartHandler = ()=>{
    setCartisShown(true);
  }
  const hideCartHandler = ()=>{
    setCartisShown(false);
  }

  return (
<CartProvider>
    {cartIsShown && <Cart onClose = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>

      <main>
          <Meals></Meals>
        </main>
  </CartProvider>  
    
  );
}

export default App;

