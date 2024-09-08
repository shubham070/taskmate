import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Task from './Task';
import AddTask from './AddTask';

export default function TaskList(props) {
  const {data, loading} = useFetch("http://localhost:8000/tasks");
  const [tasks, setTasks] = useState(null);   

  const onDelete = (id) => {
//      setTasks(tasks.filter(task => task.id !== id));
  };
        if(data)
        {
          console.log('data');
          console.log(data);
         // setTasks(data)
        }
  const addTask = (val)=>{
    setTasks((task)=> [...task,
      {
        id: Math.max(...tasks.map(user => user.id))+1,
        name: val,
        completed: "Yes",
      }]);
  }

    if(loading)  return(    <div className="box"><span>loading....</span></div>)
    else {  return (
    <div className="box">
      <h2> {props.title} </h2>
      {/* <AddTask handleAdd={addTask}/> */}
      <div>
        <ul>
          <li>
            <span>Id</span>
            <span>Name</span>
            <span>Status</span>
            <span>Action</span>
          </li>
          { data && data.map((task) =>
          <li key={task.id}><Task task = {task} handleDelete = {onDelete}></Task></li>
        )}
        </ul>
      </div>
    </div>
  );}
}
