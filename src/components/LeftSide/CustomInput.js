import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#eee",
  borderColor: "#ddd",
  color: "black",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#f4f4f4",
    borderColor: "#ddd",
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.15rem rgba(211,211,211,.5)",
  },
});

const CustomInput = (props) => {
  const { val, handleValChange, type, handleMinusChange, handlePlusChange } =
    props;

  return (
    <div className="d-flex mt-2">
      <BootstrapButton
        variant="contained"
        className="border-right-radius-0"
        onClick={() => handleMinusChange(type)}
      >
        -
      </BootstrapButton>
      <input
        type="number"
        id="number"
        value={val}
        onChange={(event) => handleValChange(event, type)}
        className="w-100"
      />
      <BootstrapButton
        variant="contained"
        className="border-left-radius-0"
        onClick={() => handlePlusChange(type)}
      >
        +
      </BootstrapButton>
    </div>
  );
};

export default CustomInput;
