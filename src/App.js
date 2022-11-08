import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart.js";



function App() {
  const [cartIsShown,setCartisShown] = useState(false);

  const showCartHandler = ()=>{
    setCartisShown(true);
  }
  const hideCartHandler = ()=>{
    setCartisShown(false);
  }

  return (
<>
    {cartIsShown && <Cart onClose = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>

      <main>
          <Meals></Meals>
        </main>
  </>  
    
  );
}

export default App;

