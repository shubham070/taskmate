import { useState } from "react";
import { useNavigate } from "react-router";

export default function Counter(props) {
  const [count, setCount] = useState(0);
  const Navigate = useNavigate();
  return (
    <div className="box">
      <h2> {props.title} </h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)} className="add">ADD</button>
      <button onClick={() => setCount(count - 1)} className="sub">SUBTRACT</button>
      <button onClick={() => Navigate("/")}>Home</button>
    </div>
  );
}
