import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

// interface Props {
//   gameQuery: GameQuery;
// }

const GameHeading = (/*{ gameQuery }: Props*/) => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  // const { data: genres } = useGenres();
  // const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const genre = useGenre(genreId);

  // const { data: platforms } = usePlatforms();
  // const platform = platforms?.results.find(
  //   (p) => p.id === gameQuery.platformId
  // );
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginY={5} fontSize={"5xl"} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
