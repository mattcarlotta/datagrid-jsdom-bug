import * as React from "react";
import Head from "next/head";
import Padding from "~components/Layout/Padding";
import GlobalStylesheet from "~styles/globalStylesheet";
import { AppProps, ReactElement } from "~types";

const Container = ({ Component, pageProps }: AppProps): ReactElement => {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <>
      <GlobalStylesheet />
      <Padding top="20px" right="20px" bottom="20px" left="20px">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <Component {...pageProps} />
      </Padding>
    </>
  );
};

export default Container;
