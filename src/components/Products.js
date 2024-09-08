import { useCallback, useEffect, useState } from "react";
export default function Products() {
    const [url, setUrl] = useState("http://localhost:8000/products")
    
    const getFilteredProducts = () =>
    {
        setUrl("http://localhost:8000/products?Price_lt=200")
    }

    const getAllProducts = () =>
        {
            setUrl("http://localhost:8000/products")
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
    <div className="box">
      <ul>
       <li>
            <button className='add' onClick={getAllProducts}>All Products </button>
            <button className='trigger' onClick={getFilteredProducts}>Prods below Rs-200 </button>
       </li>
        {products.map((x) => (
          <li key={x.Id}><span>{x.Id}</span> <span>{x.Name} </span> </li>
        ))}
      </ul>
    </div>
  );
}
