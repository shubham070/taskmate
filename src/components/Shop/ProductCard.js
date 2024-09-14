import "./ProductCard.css";

export default function ProductCard({product}) {
  return (
    <div className="productCard">
      <img src={product.image} alt={product.name}/>
      <p className="name">{product.name}</p>
      <div className="action">
        <p>{product.price} $</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
