import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import styled from "styled-components";

const MealForm = ({ id, onAddToCart }) => {
  const [amoundIsvalid, setAmountIsvalid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountIsvalid(false);
      return;
    }else{
      setAmountIsvalid(true);

    }
    onAddToCart(enteredAmountNumber);
    amountInputRef.current.value = "0";
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{ id: id, type: "number", min: 1, max: 10 }}
      />

      <Button>+ Add</Button>
      {!amoundIsvalid && (
        <Validation>Please enter a valid amount (1-10)</Validation>
      )}
    </Form>
  );
};

export default MealForm;

const Form = styled.form`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #913007;
  border: 1px solid #511700;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;
  &:active {
    background-color: #814003;
    border-color: #913403;
  }
`;
const Validation = styled.p`
  color: red;
`;
