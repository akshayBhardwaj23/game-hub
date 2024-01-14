import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

//State handled with Zustand
// interface Props {
//   onSelectedGenre: (genre: Genre) => void;
//   selectedGenreId?: number;
// }

const GenreList = (/*{ onSelectedGenre, selectedGenreId }: Props*/) => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const noGenre: any = null;

  if (error) return null;

  if (isLoading) return <Spinner />;
  return (
    <>
      <Button
        variant="link"
        fontSize={"2xl"}
        marginBottom={3}
        color={"white"}
        fontWeight={"bold"}
        onClick={() => selectedGenreId}
      >
        Genres
      </Button>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={
                  () => setSelectedGenreId(genre.id) /*onSelectedGenre(genre)*/
                }
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
