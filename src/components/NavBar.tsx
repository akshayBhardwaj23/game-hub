import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

//comments are after introducing zustand

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const NavBar = (/*{ onSearch }: Props*/) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput /*onSearch={onSearch}*/ />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
