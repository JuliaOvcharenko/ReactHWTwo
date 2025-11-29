import { createRoot } from "react-dom/client";
import { App } from "./App";


let rootElement = document.querySelector("#root") as HTMLElement

let root = createRoot(rootElement)

root.render(<App></App>)


