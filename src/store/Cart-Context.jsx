import React from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem:(id) => {},
  clearAll:()=>{},
});
export default CartContext;
