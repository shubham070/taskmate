import CartCard from "./CartCard";

export default function Cart()
{

    const products = [
        {
          id: 1,
          name: "Sony Wh-Ch510 Bluetooth Wireless",
          price: 149,
          image: "/assets/images/1001.png",
        },
        {
          id: 2,
          name: "boAt Rockerz 450",
          price: 49,
          image: "/assets/images/1002.png",
        }];
    

    return (
        <section className="cart">
            <h1>Cart Items: {products.length}
            {
                products.map((product)=>(
                    <CartCard key={product.id} product={product}/>
                ))
            }
            </h1>
        </section>
    )
}