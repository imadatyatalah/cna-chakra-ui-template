import { Box, Heading, Text, Button } from "@chakra-ui/react";
import NextImage from "next/image";

const HomePage = () => (
  <>
    <Box
      as="section"
      minH="100vh"
      maxW="1440px"
      mx="auto"
      textAlign={{ base: "center", lg: "left" }}
      px={[4, 6, 10, 14, 20]}
      display="flex"
      flexDir={{ base: "column-reverse", lg: "row" }}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems="center"
    >
      <Box maxW={{ base: "90%", lg: "50%" }}>
        <Heading
          as="h1"
          fontSize={{ base: "1.5rem", sm: "2rem", lg: "3rem" }}
          fontWeight="800"
        >
          Help your team for tracking projects better.
        </Heading>
        <Text
          fontSize={{ base: "12px", sm: "16px" }}
          fontWeight="400"
          pt="4"
          pb="10"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore atque
          perspiciatis qui ex ducimus nesciunt et nam. In amet earum optio cum
          aperiam autem, possimus vero voluptates! Laboriosam, possimus
          aspernatur.
        </Text>
        <Box
          display="flex"
          justifyContent={{ base: "center", lg: "flex-start" }}
          alignItems="center"
          flexDir={{ base: "column", lg: "row" }}
        >
          <Button
            colorScheme="yellow"
            variant="solid"
            mb="2"
            mr={{ lg: "5" }}
            fontWeight="500"
            size="lg"
          >
            Create new account
          </Button>
          <Button
            colorScheme="yellow"
            variant="outline"
            mb="2"
            px="12"
            fontWeight="500"
            size="lg"
          >
            Login
          </Button>
        </Box>
      </Box>
      <Box>
        <Box maxW={{ base: "xl", lg: "auto" }}>
          <NextImage src="/taxi-1.png" width="600" height="600" alt="" />
        </Box>
      </Box>
    </Box>
  </>
);

export default HomePage;
