import NextLink from "next/link";
import type { MouseEventHandler } from "react";

import { Box, chakra } from "@chakra-ui/react";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

interface Props {
  onClick: MouseEventHandler<HTMLAnchorElement> | undefined;
}

const Links = ({ onClick }: Props) => {
  return (
    <>
      {links.map((link) => (
        <Box
          as="li"
          listStyleType="none"
          px={{ lg: "8" }}
          py={{ base: "3" }}
          key={link.title}
        >
          <NextLink href={link.path}>
            <chakra.a href={link.path} onClick={onClick}>
              {link.title}
            </chakra.a>
          </NextLink>
        </Box>
      ))}
    </>
  );
};

export default Links;
