export default function Task(props) {
  const task = props.task;
  return (
    <>
        <span>{task.id}</span>
        <span>{task.name}</span>
        <span>{task.completed ? "yes" : "no"}</span>
        {/* <button onClick={() => props.handleDelete(task.id)} className="delete">
          Delete
        </button> */}
    </>
  );
}
