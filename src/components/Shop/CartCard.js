import "./CartCard.css";
import { useCart } from "./Context/CartContext";

export default function CartCard({product})
{
    const {removeFromCart} = useCart();

    return(
        <section className="cartCard">
         <img src={product.image} alt={product.name}/>
          <p className="name">{product.name}</p>
          <p>{product.price} $</p>
          <button onClick={()=>removeFromCart(product)}>Remove</button>
        </section>
    )
}