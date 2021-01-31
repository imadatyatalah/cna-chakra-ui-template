import { chakra, VisuallyHidden } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = () => {
  return (
    <>
      <VisuallyHidden>Create Next App</VisuallyHidden>
      <NextLink href="/">
        <chakra.a href="/" fontSize="2rem" fontWeight="700">
          CNA
        </chakra.a>
      </NextLink>
    </>
  );
};

export default Logo;
