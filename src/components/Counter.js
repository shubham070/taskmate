import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="box">
      <h2> Counter </h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)} className="add">
        {" "}
        ADD{" "}
      </button>
      <button onClick={() => setCount(count - 1)} className="sub">
        {" "}
        SUBTRACT{" "}
      </button>
    </div>
  );
}
