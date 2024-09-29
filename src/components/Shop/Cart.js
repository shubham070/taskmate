import CartCard from "./CartCard";
import { useCart } from "./Context/CartContext";

export default function Cart()
{
    const { total, cartList } = useCart();
    

    return (
        <section className="cart">
            <h1>Cart Items: {cartList.length}/{total}
            {
                cartList.map((product)=>(
                    <CartCard key={product.id} product={product}/>
                ))
            }
            </h1>
        </section>
    )
}