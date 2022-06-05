import type { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";

import { extendTheme, ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/layout";
import SEO from "../../next-seo.config";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

const theme = extendTheme({
  fonts: {
    body: "Poppins, -apple-system",
    heading: "Poppins, -apple-system",
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo {...SEO} />

    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </>
);

export default MyApp;
