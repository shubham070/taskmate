import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import TaskList from "./components/TaskList";
import { Navigate, Route, Routes } from "react-router";

export default function App() {
  const admin=false;
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={admin?<Products></Products>:<Navigate to="/"/>}></Route>
          <Route path="/counter" element={<Counter title="Counter" />}></Route>
          <Route
            path="/products"
            element={<Products title="Products" />}
          ></Route>
          <Route path="/tasks" element={<TaskList title="Tasks" />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
