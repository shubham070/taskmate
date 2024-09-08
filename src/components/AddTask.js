export default function AddClass(props) {

    const handleChange = (e)=>{
        e.preventDefault();
        console.log(e);
        props.handleAdd(e.target[0].value)
    }

    return(
        <section className="addTask">
            <form onSubmit={handleChange}>
                <label htmlFor="taskName">Task Name</label>
                <input type="text" name="taskName" id="taskName" placeholder=" your task name" maxLength={10}></input>
                <button className="add" type="submit">Add Task</button>
            </form>
        </section>
    )

}