import { useState } from "react";
import Task from './Task';
import AddTask from './AddTask';

export default function TaskList(props) {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", completed: true },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: false },
  ]);

    const onDelete = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
  };

  const addTask = (val)=>{
    setTasks((task)=> [...task,
      {
        id: Math.max(...tasks.map(user => user.id))+1,
        name: val,
        completed: "Yes",
      }]);
  }

  return (
    <div className="box">
      <h2> {props.title} </h2>
      <AddTask handleAdd={addTask}/>
      <div>
        <ul>
          <li>
            <span>Id</span>
            <span>Name</span>
            <span>Status</span>
            <span>Action</span>
          </li>
          { tasks.map((task) =>
          <li key={task.id}><Task task = {task} handleDelete = {onDelete}></Task></li>
        )}
        </ul>
      </div>
    </div>
  );
}
