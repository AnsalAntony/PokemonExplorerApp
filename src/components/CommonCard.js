import React from "react";
import Card from "@mui/material/Card";
import CommonButton from "./CommonButton";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';
import { Box } from "@mui/material";

const CommonCard = ({
  CardContentStyl,
  titleText,
  descriptionText,
  cardActionsStyle,
  buttonText,
  titleVariant="h5",
  descriptionVariant="body2",
  descriptioncolor="text.secondary",
  descriptionStyle,
  buttonPress,
  iconId = ''
}) => {
  const defaultCardContentStyle = {
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
  };
  const defaltCardActionsStyle = {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#D0D3D4",
  };
  const defatDescriptionStyle={
    marginTop: 10,
  };
  return (
    <Card>
       <div style={{alignItems:"center",justifyContent:"center", display:"flex", flexDirection:"row"}}>
        <CardMedia
        sx={{ height: 150, width:150}}
        image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + iconId + ".png"} 
        title={titleText}
      />
    </div>
      <CardContent
        style={{
          ...defaultCardContentStyle,
          ...CardContentStyl,
        }}
      >
        <Typography variant={titleVariant}>
          {titleText}
        </Typography>
        <Typography
          style={{...defatDescriptionStyle, ...descriptionStyle }}
          variant={descriptionVariant}
          color={descriptioncolor} >
          {descriptionText}
        </Typography>
      </CardContent>
      <CardActions style={{ ...defaltCardActionsStyle, ...cardActionsStyle }}>
        <CommonButton 
        onpres ={buttonPress}
        text={buttonText} />
      </CardActions>
    </Card>
  );
};

export default CommonCard;
