import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import React from "react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        // base: `"nav" "main"`,
        // lg: `"nav nav" "aside main"`,
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* <GridItem area="nav">
        <NavBar
        // onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} This prop not required as 'Zustand' used for state management
        />
      </GridItem> */}
      <Show above="lg">
        <GridItem area="aside" paddingX={"5px"}>
          <GenreList
          //This prop not required as 'Zustand' used for state management
          // selectedGenreId={gameQuery.genreId}
          // onSelectedGenre={(genre) =>
          //   setGameQuery({ ...gameQuery, genreId: genre.id })
          // }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={{ base: 5, md: 10 }}>
          <GameHeading /*gameQuery={gameQuery}*/ />
          <Flex>
            <Box marginRight={5}>
              <PlatformSelector
              // selectedPlatformId={gameQuery.platformId}
              // onSelectPlatform={(platform) =>
              //   setGameQuery({ ...gameQuery, platformId: platform.id })
              // }
              />
            </Box>

            <SortSelector
            // sortOrder={gameQuery.sortOrder}
            // onSelectSortOrder={(sortOrder) =>
            //   setGameQuery({ ...gameQuery, sortOrder })
            // }
            />
          </Flex>
        </Box>
        <GameGrid /*gameQuery={gameQuery}*/ />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
