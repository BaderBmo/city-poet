import React from "react";
import { render } from "react-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Provider } from "react-redux";
import store from "./store/index";

import App from "./App";
render(
  <ParallaxProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ParallaxProvider>,
  document.getElementById("root")
);