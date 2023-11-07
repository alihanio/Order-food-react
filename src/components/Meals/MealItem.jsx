import React, { useContext } from "react";
import styled from "styled-components";
import MealForm from "./MealForm";
import CartContext from "../../store/Cart-Context";

const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);
  const addToCart = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };
  return (
    <MealList>
      <div>
        <MealName>{name}</MealName>
        <Description>{description}</Description>
        <MealPrice>${price}</MealPrice>
      </div>
      <div>
        <MealForm id={id} onAddToCart={addToCart} />
      </div>
    </MealList>
  );
};

export default MealItem;

const MealList = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`;
const MealName = styled.h3`
  margin: 0 0 0.25rem 0;
`;
const Description = styled.p`
  font-style: italic;
`;
const MealPrice = styled.p`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #913007;
  font-size: 1.25rem;
`;
