import React from "react";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";


const Header = props=>{
   return(
      <>
      <header className={classes.header}>
        <h1>EveryWhere Meals</h1>
   <HeaderCartButton></HeaderCartButton>
       
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage}  alt='Dishes on the table'/>
      </div>
      </>
   )
};

export default Header;