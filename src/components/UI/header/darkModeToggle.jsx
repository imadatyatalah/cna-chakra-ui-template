import { Button, VisuallyHidden } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const DarkModeToggle = ({ onClick, colorMode }) => (
  <>
    <VisuallyHidden>
      {colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"}
    </VisuallyHidden>
    <Button
      ml={{ lg: "6" }}
      onClick={onClick}
      variant="ghost"
      _hover={{ color: "black", bgColor: "white" }}
    >
      {colorMode === "light" ? (
        <MoonIcon name="moon-icon" />
      ) : (
        <SunIcon name="sun-icon" color="black" />
      )}
    </Button>
  </>
);

export default DarkModeToggle;
