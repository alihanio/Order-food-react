import React from "react";
import styled from "styled-components";

const Input = React.forwardRef((props, ref) => {
  return (
    <UiInputCont>
      <UiLabel htmlFor={props.input.id}>{props.label}</UiLabel>
      <UiInput ref={ref} {...props.input} />
    </UiInputCont>
  );
});

export default Input;

const UiInput = styled.input`
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding-left: 0.5rem;
`;
const UiInputCont = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const UiLabel = styled.label`
  font-weight: bold;
  margin-right: 1rem;
`;
