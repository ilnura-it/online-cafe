import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";



const Dish = ({dish}) => {

   const [quantity, setQuantity] = useState(1)
   const dispatch = useDispatch();
   return (
      <div> 
         <img src={`./${dish.img}.avif`} alt="dish" />
         <h2>{dish.name}</h2>
         <h1>$ {dish.price}</h1>
         {/* TO FIX LATER */}
         <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity}/>
         <button onClick = {() => {dispatch(addItemToCart({dish, quantity}))}}>ADD TO CART</button>
      </div>
   )
}

export default Dish;