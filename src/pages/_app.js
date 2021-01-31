import { extendTheme, ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/layout";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

const theme = extendTheme({
  fonts: {
    body:
      "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    heading:
      "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  colors: {
    customYellow: "#FFCF3C",
  },
});

const MyApp = ({ Component, pageProps }) => (
  <>
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </>
);

export default MyApp;
