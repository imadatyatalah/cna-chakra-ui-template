import { Box, Button } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";

import { SEO } from "../components/seo";

const Custom404 = () => (
  <>
    <SEO title="404 Page Not Found" />

    <Box
      as="section"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      py="4"
    >
      <Box maxW="xl">
        <NextImage
          src="/404-robot-bro.png"
          width="600"
          height="600"
          alt="error 404 robot"
        />
        <Button colorScheme="telegram" size="lg">
          <NextLink href="/">
            <a>Back to home page.</a>
          </NextLink>
        </Button>
      </Box>
    </Box>
  </>
);

export default Custom404;
