import Counter from "./components/Counter";
import Header  from "./components/Header";
import Products from "./components/Products";
import TaskList from "./components/TaskList";

export default function App() {

  return (
    <div>
    <Header/>
    <Products/>
    <Counter title="Counter Example"/>
    <TaskList title="Task List"/>
    </div>
  );
}
