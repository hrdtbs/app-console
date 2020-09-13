import { EmotionCacheProvider } from "../../EmotionCacheProvider";
import { customElement } from "lit-element";
import { rc2wc } from "../../rc2wc";
import App from "./App";
import React from "react";

const App_ = () => {
  return (
    <EmotionCacheProvider>
      <App />
    </EmotionCacheProvider>
  );
};

@customElement("todo-app")
export class ReactFrame extends rc2wc(App_) {}
