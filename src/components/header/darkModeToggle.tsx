import type { MouseEventHandler } from "react";

import { Button, ColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  colorMode: ColorMode;
}

const DarkModeToggle = ({ onClick, colorMode }: Props) => (
  <Button
    aria-label={
      colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"
    }
    ml={{ lg: "6" }}
    variant="ghost"
    _hover={{ color: "black", bgColor: "white" }}
    onClick={onClick}
  >
    {colorMode === "light" ? (
      <MoonIcon name="moon-icon" />
    ) : (
      <SunIcon name="sun-icon" />
    )}
  </Button>
);

export default DarkModeToggle;
