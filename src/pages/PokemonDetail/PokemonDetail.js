import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { pokemonDetails } from "../../services/ApiService";
import FullScreenContainer from "../../components/FullScreenContainer";
import HeaderBar from "../../components/HeaderBar";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import CommonCard from "../../components/CommonCard";
import CommonGrid from "../../components/CommonGrid";
import { extractValueFromUrl } from "../../utils/commonUtils";

const PokemonDetail = () => {
  const [details, setDetails] = useState([]);
  const { state } = useLocation();
  const pokemonId = state?.pokemonId;
  const navigate = useNavigate();

  useEffect(() => {
    // Fetching data for pokemonDetails
    pokemonDetails(pokemonId)
      .then((response) => {
        console.log("response data **", response?.data);
        setDetails(response?.data?.abilities);
      })
      .catch((error) => {
        console.log("Error fetching Charizard data:", error);
      });
  }, [pokemonId]);

  const handleButtonClick = () => {
    
    navigate("/home");
  };

  return (
      <FullScreenContainer
      containerStyle={{ height: "100vh"}}
      >
         <HeaderBar headerText={pokemonId} buttonText = "Back" 
          buttonPress ={() => {
            handleButtonClick()
          }}
         />
        <CommonGrid
        gridStyle={{height:""}}>
         {details?.map((item, index) => (
          <Grid key={index} item lg={3}>
            <CommonCard
              key={index}
              titleText={item?.ability?.name|| ""}
              descriptionText={item?.ability?.url || ""}
              iconId={extractValueFromUrl(item?.ability?.url)}
            />
          </Grid>
        ))}
      </CommonGrid>

      </FullScreenContainer>
  );
};

export default PokemonDetail;
