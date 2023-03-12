import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { useFormik } from "formik";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
`;
const Field = styled.div`
  position: relative;
  width: 100%;
`;
const InputNumber = styled.input`
  position: relative;
  box-sizing: border-box;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.34) 0%,
    rgba(255, 255, 255, 0.44) 50%,
    rgba(255, 255, 255, 0.56) 100%
  );
  border: 2px solid rgba(255, 255, 255, 0.27);
  border-radius: 15px;
  padding: 27px 0 13px 15px;
  font-style: italic;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #9462ff;
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  width: 100%;

  touch-action: manipulation;
  transform-origin: left bottom;

  :focus {
    outline: none;
  }
  :not(:placeholder-shown) + label,
  :focus + label {
    position: absolute;
    left: 15px;
    top: 18px;
    font-size: 12px;
    pointer-events: none;
    transition: 0.2s;
    touch-action: manipulation;
    transform-origin: left bottom;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  [type="number"] {
    -moz-appearance: textfield;
  }
`;
const Label = styled.label`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #9462ff;
  font-weight: 600;
  font-style: italic;
  font-size: 19px;
  pointer-events: none;
  transition: 0.2s;
  touch-action: manipulation;
  transform-origin: left bottom;
`;
const InputButton = styled.button`
  box-sizing: border-box;
  background: linear-gradient(
    90deg,
    rgba(199, 173, 255, 0.5) 0%,
    rgba(199, 173, 255, 0.75) 50%,
    rgba(199, 173, 255, 1) 100%
  );
  border: 2px solid rgba(255, 255, 255, 0.27);
  border-radius: 15px;
  padding: 20px 0;
  font-style: italic;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #ffffff;
  width: 100%;

  :hover {
    filter: brightness(0.95);
    scale: 1.01;
    cursor: pointer;
  }
`;
const CurrencySymbol = styled.span`
  position: absolute;
  top: 29px;
  font-size: 20px;
  color: #9462ff;
  font-weight: 600;
  font-style: italic;
  font-size: 19px;
  pointer-events: none;
  transition: 0.2s;
  touch-action: manipulation;
  transform-origin: left bottom;
`;

const AuctionForm = ({ values }) => {
  const formik = useFormik({
    initialValues: {
      price: "",
    },
    validationSchema: Yup.object({
      price: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log("working");
    },
  });

  function VisibilityChangeCurrency() {
    if (formik.values.price.toString().length === 0) {
      return "none";
    } else {
      return "block";
    }
  }
  function PositionCalculateCurrency() {
    if (formik.values.price.toString().length < 1) {
      return "250px";
    } else if (formik.values.price.toString().length === 1) {
      return "30px";
    } else if (formik.values.price.toString().length === 2) {
      return "42px";
    } else if (formik.values.price.toString().length === 3) {
      return "53px";
    } else if (formik.values.price.toString().length === 4) {
      return "64px";
    } else if (formik.values.price.toString().length === 5) {
      return "75px";
    } else if (formik.values.price.toString().length === 6) {
      return "86px";
    } else if (formik.values.price.toString().length === 7) {
      return "98px";
    } else if (formik.values.price.toString().length === 8) {
      return "108px";
    } else if (formik.values.price.toString().length === 9) {
      return "119px";
    } else if (formik.values.price.toString().length === 10) {
      return "131px";
    } else if (formik.values.price.toString().length >= 11) {
      return "150px";
    }
  }

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Field>
        <InputNumber
          type="number"
          name="price"
          id="price"
          placeholder=" "
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        <Label htmlFor="price">Podaj kwotę</Label>
        <CurrencySymbol
          style={{
            display: VisibilityChangeCurrency(),
            left: PositionCalculateCurrency(),
          }}
        >
          zł
        </CurrencySymbol>
      </Field>
      <Field>
        <InputButton type="submit">Licytuj</InputButton>
      </Field>
    </Form>
  );
};

export default AuctionForm;
