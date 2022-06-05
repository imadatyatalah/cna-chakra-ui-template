import type { Dispatch, SetStateAction } from "react";

import { Box } from "@chakra-ui/react";
import { Turn as Hamburger } from "hamburger-react";

interface Props {
  toggled: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu = ({ toggled, toggle }: Props) => (
  <Box display={{ lg: "none" }}>
    <Hamburger
      hideOutline={false}
      label="hamburger menu"
      size={25}
      toggled={toggled}
      toggle={toggle}
      direction="right"
    />
  </Box>
);

export default HamburgerMenu;
