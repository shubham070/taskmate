import { useState } from "react";

export default function App()
{

    function handleAdd()
    {
      setCount(count + 1);
    }

    function handleSubtract()
    {
      setCount(count -1);
    }

  const  [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button  onClick={handleAdd} className="add"> ADD </button>
        <button onClick={handleSubtract} className="sub"> SUBTRACT </button>
      </div>
    </div>
  )
}