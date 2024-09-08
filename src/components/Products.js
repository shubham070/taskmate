import { useCallback, useEffect, useState } from "react";

export default function Products() {
    const [url, setUrl] = useState("https://my-json-server.typicode.com/shubham070/taskmate/products")
    
    const getFilteredProducts = () =>
    {
        setUrl("https://my-json-server.typicode.com/shubham070/taskmate/products?Price_lt=200")
    }

    const getAllProducts = () =>
        {
            setUrl("https://my-json-server.typicode.com/shubham070/taskmate/products")
        }
    
    const getProducts = useCallback(async () => {
    await fetch(url)
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  },[url]);

  useEffect(() => {
    getProducts();
//    setCount(count+1)
  },[getProducts]);

  const [products, setProducts] = useState([]);

  return (
    <div>
      <ul>
       <li className="box">
            <button className='add' onClick={getAllProducts}>All Products </button>
            <button className='trigger' onClick={getFilteredProducts}>Prods below Rs-200 </button>
       </li>
        {products.map((x) => (
          <li className="box" key={x.Id}>
            <span> sku - {x.id}</span> 
            <span> {x.Name} </span>
            <span> Rs {x.Price} </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
