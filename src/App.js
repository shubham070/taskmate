import Counter from "./components/Counter";
import Header  from "./components/Header";
import TaskList from "./components/TaskList";

export default function App() {

  return (
    <div>
    <Header/>
    <Counter title="Counter Example"/>
    <TaskList title="Task List"/>
    </div>
  );
}
