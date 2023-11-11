/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient} from "react-query";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "lib/layout";
import customTheme from "lib/styles/customTheme";
import "lib/styles/globals.css";
import 'react-alice-carousel/lib/alice-carousel.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        retry:2,
        staleTime: 1000 * 120 * 10,

    }
}
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <QueryClientProvider client={queryClient}>
      <Layout>
        
        <Component {...pageProps} />
      </Layout>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default MyApp;
