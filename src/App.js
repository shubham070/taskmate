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

  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([
    {id: 1, name: "Task 1", completed: true},
    {id: 2, name: "Task 2", completed: false},
    {id: 3, name: "Task 3", completed: false},
  ])
  return (
    <div className="App">
      <div className="box">
      <h2> Counter </h2>
        <p>{count}</p>
        <button  onClick={handleAdd} className="add"> ADD </button>
        <button onClick={handleSubtract} className="sub"> SUBTRACT </button>
      </div>
    <hr/>
    <div className="box">
        <h2> Task List </h2>
        <ul>
          
            <li>
                 <span>Id</span>
                 <span>Name</span>
                 <span>Status</span>
                 <span>Action</span>
              </li>
          {
            tasks.map((task) => (
              <li key = {task.id}>
                 <span>{task.id}</span>
                 <span>{task.name}</span>
                 <span>{task.completed ? 'yes' : 'no'}</span>
                 <button>delete</button>
              </li>
            ))
          }
        </ul>
    </div>

    </div>
  )
}