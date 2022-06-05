import NextImage from "next/image";

import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Home = () => (
  <>
    <NextSeo title="Home" />

    <Box
      as="section"
      maxW="1440px"
      py="4"
      px={[4, 6, 10, 14, 20]}
      mx="auto"
      display="flex"
      flexDir={{ base: "column-reverse", lg: "row" }}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems="center"
      textAlign={{ base: "center", lg: "left" }}
    >
      <Box pr={{ lg: "4" }} maxW={{ base: "90%", lg: "50%" }}>
        <Heading
          as="h1"
          fontSize={{ base: "1.5rem", sm: "2rem", lg: "3rem" }}
          fontWeight="800"
        >
          Help your team for tracking projects better.
        </Heading>
        <Text fontWeight="400" pt="4" pb="10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore atque
          perspiciatis qui ex ducimus nesciunt et nam. In amet earum optio cum
          aperiam autem, possimus vero voluptates! Laboriosam, possimus
          aspernatur.
        </Text>
        <Box
          display="flex"
          justifyContent={{ base: "center", lg: "flex-start" }}
          alignItems="center"
        >
          <Button
            colorScheme="facebook"
            variant="solid"
            mr="5"
            fontWeight="600"
            size="lg"
          >
            Create new account
          </Button>
          <Button
            colorScheme="facebook"
            variant="outline"
            px="12"
            fontWeight="600"
            size="lg"
          >
            Login
          </Button>
        </Box>
      </Box>
      <Box maxW={{ base: "xl", lg: "auto" }}>
        <NextImage
          src="/team-bro.png"
          width="600"
          height="600"
          alt="team"
          priority
        />
      </Box>
    </Box>
  </>
);

export default Home;
