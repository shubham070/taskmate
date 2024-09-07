import { useState } from "react";
export default function TaskList(props) {
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
    <div className="box">
      <h2> {props.title} </h2>{" "}
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
        <button className="add" type="submit">
          Add Record
        </button>
      </form>
      <div>
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
              <button onClick={() => onDelete(i)} className="delete">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
