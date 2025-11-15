import "slick-carousel/slick/slick.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.scss";
import "slick-carousel/slick/slick-theme.css";
import "nprogress/nprogress.css";

import { Provider } from "react-redux";
import store from "../redux/store";
import Providers from "../components/Providers";

import { ToastContainer } from "react-toastify";

import { Router } from "next/router";

import nProgress from "nprogress";
import AppWrapper from "../components/AppWrapper";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Providers>
      <Provider store={store}>
        <AppWrapper>
          <ToastContainer />
          <Component {...pageProps} />
        </AppWrapper>
      </Provider>
    </Providers>
  );
}

export default MyApp;
