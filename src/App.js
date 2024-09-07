import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", completed: true },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: false },
  ]);

  const onDelete = (i) => {
    const del = [...tasks];
    del.splice(i, 1);
    setTasks(del);
  };

  return (
    <div className="App">
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
      <hr />
      <div className="box">
        <h2> Task List </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTasks((prev) => [
              ...prev,
              {
                id: prev[tasks.length - 1].id + 1,
                name: e.target[0].value,
                completed: "Yes",
              },
            ]);
          }}
        >
          <input type="text"></input>
          <button className="add" type="submit">Add Record</button>
        </form>
        <ul>
          <li>
            <span>Id</span>
            <span>Name</span>
            <span>Status</span>
            <span>Action</span>
          </li>
          {tasks.map((task, i) => (
            <li key={task.id}>
              <span>{task.id}</span>
              <span>{task.name}</span>
              <span>{task.completed ? "yes" : "no"}</span>
              <button onClick={() => onDelete(i)} className="delete">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
