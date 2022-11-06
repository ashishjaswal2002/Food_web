import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart.js";



function App() {
  return (
<>
       <Cart/>
      <Header/>

      <main>
          <Meals></Meals>
        </main>
  </>  
    
  );
}

export default App;

// Task to do.
// Video 137 and Working on Form .....