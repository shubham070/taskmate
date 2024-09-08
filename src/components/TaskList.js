import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Task from './Task';
import AddTask from './AddTask';

export default function TaskList(props) {
  const {data, loading} = useFetch("https://my-json-server.typicode.com/shubham070/taskmate/tasks");
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
    <div>  
    <div className="box">
      <h2> {props.title} </h2> <hr/>
      <AddTask handleAdd={addTask}/> 
    </div>
        <ul>
          { data && data.map((task) =>
          <li className="box" key={task.id}><Task task = {task} handleDelete = {onDelete}></Task></li>
        )}
        </ul>
      </div>
  );}
}
