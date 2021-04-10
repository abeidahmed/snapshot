import React from "react";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "styles/fonts.scss";
import "styles/index.scss";

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
