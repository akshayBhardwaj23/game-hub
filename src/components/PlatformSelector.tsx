import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

// interface Props {
//   onSelectPlatform: (platform: Platform) => void;
//   selectedPlatformId?: number;
// }

const PlatformSelector =
  (/*{ onSelectPlatform, selectedPlatformId }: Props*/) => {
    const { data, error } = usePlatforms();
    // const selectedPlatform = data.results.find(
    //   (p) => p.id === selectedPlatformId
    // );
    const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
    const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const selectedPlatform = usePlatform(selectedPlatformId);

    if (error) return null;
    const noPlatform: any = null;
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setSelectedPlatformId(noPlatform)}>
            All Platforms
          </MenuItem>
          {data?.results.map((platform) => (
            <MenuItem
              onClick={
                () =>
                  setSelectedPlatformId(
                    platform.id
                  ) /*onSelectPlatform(platform)*/
              }
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  };

export default PlatformSelector;
