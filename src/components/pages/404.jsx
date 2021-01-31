import { Box } from "@chakra-ui/react";
import NextImage from "next/image";

const Custom404Page = () => (
  <>
    <Box
      as="section"
      minH="100vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box maxW="xl">
        <NextImage
          src="/taxi-page-not-found-1.png"
          width="1054"
          height="912"
          alt="error 404 cute cat"
        />
      </Box>
    </Box>
  </>
);

export default Custom404Page;
