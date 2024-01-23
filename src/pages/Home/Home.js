import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPokemonList } from "../../services/ApiService";
import FullScreenContainer from "../../components/FullScreenContainer";
import HeaderBar from "../../components/HeaderBar";
import CommonCard from "../../components/CommonCard";
import { Grid } from "@mui/material";
import CommonGrid from "../../components/CommonGrid";
import { extractValueFromUrl } from "../../utils/commonUtils";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const hasMoreData = useRef(true);
  const itemsPerPage = 50;

  const fetchData = async () => {
    if (loading || !hasMoreData.current) return;

    try {
      setLoading(true);
      const apiOffset = (currentPage - 1) * itemsPerPage;
      getPokemonList(itemsPerPage, apiOffset)
        .then((response) => {
          console.log("response data **", response);
          if (response?.data?.results.length > 0) {
            const newResults = response.data.results;
            setPokemonList((prevDataList) => [...prevDataList, ...newResults]);
            setCurrentPage((prevPage) => prevPage + 1);
          } else {
            console.log("No more data available");
            hasMoreData.current = false;
          }
        })
        .catch((error) => {
          console.log("Error fetching Pokemon list:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const containerRef = useRef();

  // Add a scroll event listener to the container
  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;

        if (scrollHeight - scrollTop <= clientHeight + 100) {
          // User has reached the bottom, load more data
          fetchData();
        }
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);

      // Remove the event listener when the component unmounts
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }

    // return an empty function for cleanup
    return () => {};
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const handleButtonClick = (indexValue) => {
    // Navigate to PokemonDetail with data on button click
    navigate("/pokemon-detail", {
      state: { pokemonId: pokemonList[indexValue]?.name || 10 },
    });
  };
  
  return (
    <FullScreenContainer>
      <HeaderBar headerText={"Pokémon Explorer"} />
      <CommonGrid
      innerRef={containerRef}
      >
        {pokemonList?.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <CommonCard
              key={index}
              titleText={item?.name || ""}
              descriptionText={item?.url || ""}
              buttonText={"Learn More"}
              buttonPress ={() => {
                handleButtonClick(index)
              }}
              iconId={extractValueFromUrl(item?.url)}
            />
          </Grid>
        ))}
      </CommonGrid>
      {loading && <p>Loading...</p>}
    </FullScreenContainer>
  );
};

export default Home;
