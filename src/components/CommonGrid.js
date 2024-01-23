import { Grid } from "@mui/material";
import React from "react";

const CommonGrid = ({ children, innerRef, gridStyle }) => {
  const defatStyle = {
    marginTop: 10,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    overflowY: "auto",
    height: "100vh",
  };

  return (
    <Grid
      ref={innerRef}
      style={{
        ...defatStyle,
        ...gridStyle,
      }}
      container
      spacing={3}
    >
      {children}
    </Grid>
  );
};

export default CommonGrid;
