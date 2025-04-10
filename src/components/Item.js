import React, {useState} from "react";
//when the user clicks on the add button the text shoul be underlines and change color
//in the cart the classname ="in-cart"
//not in cart the classname= "" 
//the button shoul change from add to cart to remove from cart
//

function Item({ name, category }) {
//add the className to the li on click of a button
const [notInCart, setnotInCart]= useState(true)
const handleClick=()=>{
setnotInCart(!notInCart)
}


  return (
    <li className={notInCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{notInCart? "Add to Cart": "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
