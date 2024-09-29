import "./ProductCard.css";
import { useCart } from "./Context/CartContext";
import { useEffect, useState } from "react";

export default function ProductCard({ product }) {
  const { addToCart, removeFromCart, cartList } = useCart();
  const [existInCart, setExistInCart] = useState(false);
  useEffect(() => {
    if (cartList.find((x) => x.id === product.id)) {
      setExistInCart(true);
    } else {
      setExistInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <div className="productCard">
      <img src={product.image} alt={product.name} />
      <p className="name">{product.name}</p>
      <div className="action">
        <p>{product.price} $</p>
        {existInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
}
