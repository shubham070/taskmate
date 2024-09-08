import { useEffect, useState } from "react";

export default function Products() {
  const getProducts = () => {
    fetch("http://localhost:8000/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [products, setProducts] = useState([]);

  return (
    <div className="box">
      <ul>
        {products.map((x) => (
          <li><span>{x.Id}</span> <span>{x.Name} </span> </li>
        ))}
      </ul>
    </div>
  );
}
