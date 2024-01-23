import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material';
import CommonButton from "./CommonButton";

const HeaderBar = ({ headerStyle, headerText, variant = "h5",buttonText = "",buttonPress }) => {
  const defaultHeaderStyle = {
    display: "flex",
    height: 70,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    flexDirection : "row"
  };
  return (
    <Box style={{...defaultHeaderStyle, ...headerStyle}}>
      {buttonText != "" && (
       <CommonButton 
         buttonStyle={{position:"absolute",left:20}}
        onpres ={buttonPress}
        text={buttonText} />
        )}
      <Typography variant={variant}>{headerText}</Typography>
    </Box>
  );
};

export default HeaderBar;
