import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import NextHead from "next/head";

const Header = dynamic(() => import("../header"));

const Layout = ({ children }) => (
  <>
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    </NextHead>
    <Header />
    <Box as="main">{children}</Box>
  </>
);

export default Layout;
