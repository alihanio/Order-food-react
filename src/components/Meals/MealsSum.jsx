import React from "react";
import styled from "styled-components";

const MealsSum = () => {
  return (
    <Summery>
      <SumHeading>Delicious Food, Delivered To you</SumHeading>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Summery>
  );
};

export default MealsSum;

const Summery = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  max-width: 40rem;
  width: 90%;
  margin: auto;
  margin-top: -10rem;
  position: relative;
  background-color: #383838;
  color: white;
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
`;
const SumHeading = styled.h2`
  font-size: 2rem;
  margin-top: 0;
`;
