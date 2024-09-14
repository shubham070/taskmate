import "./CartCard.css";

export default function CartCard({product})
{
    return(
        <section className="cartCard">
         <img src={product.image} alt={product.name}/>
          <p className="name">{product.name}</p>
          <p>{product.price} $</p>
          <button>Remove</button>
        </section>
    )

}