import React from "react";
import FoodImage from "../../assets/images/meals.jpg";
import styled from "styled-components";
import HeaderCartBtn from "./HeaderCartBtn";
const Header = ({onShowCart}) => {
  return (
    <>
      <HeaderEl>
        <h1>ReactMeals</h1>
        <HeaderCartBtn onClick={onShowCart} />
      </HeaderEl>
      <MainImage>
        <FoodsImage src={FoodImage} alt="food-img" />
      </MainImage>
    </>
  );
};

export default Header;
const HeaderEl = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #913007;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;
const MainImage = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
`;
const FoodsImage = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
`;
