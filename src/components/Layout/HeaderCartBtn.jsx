import React, { useContext} from "react";
import styled from "styled-components";
import { BsCart4 } from "react-icons/bs";
import CartContext from "../../store/Cart-Context";
const HeaderCartBtn = ({onClick}) => {

      const cartCtx = useContext(CartContext);

      const { items } = cartCtx;

      const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);


  return (
    <ButtonCart onClick={onClick}>
      <span className="cartIcon">
        <BsCart4 />
      </span>
      <span>Your Cart</span>
      <Badge>{numberOfCartItems}</Badge>
    </ButtonCart>
  );
};

export default HeaderCartBtn;

const ButtonCart = styled.button`
  cursor: pointer;
  border: none;
  background-color: #511700;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
`;
const Badge = styled.span`
  background-color: #913007;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
`;
