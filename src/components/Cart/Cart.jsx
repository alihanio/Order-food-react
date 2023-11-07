import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/Cart-Context";
import CartItem from "./CartItem";
import styled from "styled-components";

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);
  const [showOrder, setShowOrder] = useState(false);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const orderHandler = () => {
    cartCtx.clearAll();
    setShowOrder(true);
  };


  const cartItems = (
    <Ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </Ul>
  );
  return (
    <Modal onClose={onClose}>
      {!showOrder ? (
        <>
          {cartItems}
          <Conteiner>
            <div>
              <TotalAmount>Total Amount : </TotalAmount>
              <TotalAmount>{totalAmount}</TotalAmount>
            </div>
            <div>
              <Close onClick={onClose}>Close</Close>
              {hasItems && <Order onClick={orderHandler}>Order</Order>}
            </div>
          </Conteiner>
        </>
      ) : (
        <OrderedModalCont>
          <Ordered>Thank you for your ordered in our FoodShop</Ordered>
          <Close onClick={onClose}>Close</Close>
        </OrderedModalCont>
      )}
    </Modal>
  );
};

export default Cart;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;

const Order = styled.button`
  font-weight: bold;
  font-size: 1.25rem;
  color: #913007;
  border: 1px solid #913029;
  padding: 1rem 1rem;
  text-align: center;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  margin-left: 1rem;
  margin: 0.25rem;
  &:active {
    background-color: #913029;
    color: white;
  }
`;
const Conteiner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Close = styled.button`
  font-weight: bold;
  font-size: 1.25rem;
  color: red;
  border: 1px solid #913029;
  padding: 1rem 1rem;

  text-align: center;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  margin-left: 1rem;
  margin: 0.25rem;
  &:active {
    background-color: #913029;
    color: white;
  }
`;
const TotalAmount = styled.span`
  font-size: 2rem;
  margin-left: 1rem;
`;
const Ordered = styled.p`
  font-size: 2rem;
`;
const OrderedModalCont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
