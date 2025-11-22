import { createRoot } from "react-dom/client";
import { App } from ".";



let rootElement = document.querySelector("#root") as HTMLElement

let root = createRoot(rootElement)

root.render(<App></App>)