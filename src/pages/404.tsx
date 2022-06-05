import NextImage from "next/image";
import NextLink from "next/link";

import { Box, Button } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Custom404 = () => (
  <>
    <NextSeo title="404 Page Not Found" />

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
          priority
        />
        <Button colorScheme="facebook" size="lg">
          <NextLink href="/">
            <a>Back to home page.</a>
          </NextLink>
        </Button>
      </Box>
    </Box>
  </>
);

export default Custom404;
