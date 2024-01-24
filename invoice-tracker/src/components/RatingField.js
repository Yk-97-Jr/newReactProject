import React from "react";
import styled from "styled-components";
import { useField } from "formik";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 24px;
`;

const RatingsContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

const RatingsButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.isSelected ? "yellow" : "white")};
  margin-right: 10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 5px;
`;

const ErrorMessage = styled.div`
  font-size: 26px;
  color: red;
`;

const RatingField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <Container className={props.className}>
      <Label htmlFor={props.id || props.name}>{label}</Label>

      <RatingsContainer name={props.name}>
        <RatingsButton onClick={() => setValue(1)} isSelected={value === 1}>
          {" "}
          1{" "}
        </RatingsButton>
        <RatingsButton onClick={() => setValue(2)} isSelected={value === 2}>
          {" "}
          2{" "}
        </RatingsButton>
        <RatingsButton onClick={() => setValue(3)} isSelected={value === 3}>
          {" "}
          3{" "}
        </RatingsButton>
        <RatingsButton onClick={() => setValue(4)} isSelected={value === 4}>
          {" "}
          4{" "}
        </RatingsButton>
        <RatingsButton onClick={() => setValue(5)} isSelected={value === 5}>
          {" "}
          5{" "}
        </RatingsButton>
      </RatingsContainer>

      {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
    </Container>
  );
};

export default RatingField;
