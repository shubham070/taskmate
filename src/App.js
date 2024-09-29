import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import TaskList from "./components/TaskList";
import { Navigate, Route, Routes } from "react-router";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Shop/Cart";
import { CartProvider } from './components/Shop/Context/CartContext';

export default function App() {
  const admin=false;
  return (
    <div>
      <Header />
      <main>
      <CartProvider>
        <Routes>
          <Route path="/" element={admin?<Products></Products>:<Navigate to="/"/>}></Route>
          <Route path="/counter" element={<Counter title="Counter" />}></Route>
          <Route
            path="/products"
            element={<Products title="Products" />}
          ></Route>
          <Route path="/products/:id" element={<ProductDetail/>}></Route>
          <Route path="/tasks" element={<TaskList title="Tasks" />}></Route>
          <Route path="/shop" element={<Shop title="Shop" />}></Route>
          <Route path="/cart" element={<Cart title="Cart" />}></Route>
        </Routes>
        </CartProvider>

      </main>
      <Footer />
    </div>
  );
}
