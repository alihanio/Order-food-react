import React from "react";
import styled from "styled-components";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem
  id={meal.id} 
  key={meal.id}
  name={meal.name}
  description={meal.description}
  price={meal.price}
  />);

  return <Meals>
    <ListConteiner>{mealsList}</ListConteiner>
  </Meals>;
};

export default AvailableMeals;
const Meals = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;
`;
const ListConteiner = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
