import NextLink from "next/link";

import { chakra } from "@chakra-ui/react";

const Logo = () => (
  <NextLink href="/" passHref>
    <chakra.a userSelect="none" fontSize="2rem" fontWeight="700">
      LOGO
    </chakra.a>
  </NextLink>
);

export default Logo;
