import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../Reducers/CartReducer";

const initialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (product) => {
        const updatedCart = state.cartList.concat(product);
        dispatch({
          type: "ADD_TO_CART",
          payload: {
            products: updatedCart,
          },
        });
      };
    
      const removeFromCart = (product) => {
        const updatedCart = state.cartList.filter((x) => x.id !== product.id);
        dispatch({
          type: "REMOVE_FROM_CART",
          payload: {
            products: updatedCart,
          },
        });
      };

    const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
