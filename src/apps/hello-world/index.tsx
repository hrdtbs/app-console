import { customElement } from "lit-element";
import { rc2wc } from "../../rc2wc";
import App from "./App";

@customElement("hello-world")
export class ReactFrame extends rc2wc(App) {}
