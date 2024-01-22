import React from "react";
import Button from "@mui/material/Button";

const CommonButton = ({ size = "small", text, buttonStyle, onpres }) => {
  return (
    <Button style={buttonStyle} size={size} onClick={onpres}>
      {text}
    </Button>
  );
};

export default CommonButton;
