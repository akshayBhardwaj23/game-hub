import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // const { data: genres } = useGenres();
  // const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const genre = useGenre(gameQuery.genreId);

  // const { data: platforms } = usePlatforms();
  // const platform = platforms?.results.find(
  //   (p) => p.id === gameQuery.platformId
  // );
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginY={5} fontSize={"5xl"} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
