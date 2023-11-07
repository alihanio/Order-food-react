import React from "react";
import styled from "styled-components";

const CartItem = ({ name, price, amount,onAdd,onRemove }) => {
  return (
    <CartList>
      <div>
        <CartName>{name}</CartName>
        <Conteiner>
          <CartPrice>{price}</CartPrice>
          <Amount>x {amount}</Amount>
        </Conteiner>
      </div>
      <Actions>
        <Button onClick={onAdd}>+</Button>
        <Button onClick={onRemove}>-</Button>
      </Actions>
    </CartList>
  );
};

export default CartItem;

const CartList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #913007;
  padding: 1rem 0;
  margin: 1rem 0;
`;
const CartName = styled.h1`
  margin: 0 0 0.5rem 0;
  color: #363636;
`;
const CartPrice = styled.span`
  font-weight: bold;
  color: #913007;
`;
const Amount = styled.span`
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  color: #363636;
`;
const Conteiner = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Actions = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`

  font-weight: bold;
  font-size: 1.25rem;
  color: #913007;
  border: 1px solid #913029;
  width: 2rem;
  height: 2rem;
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
