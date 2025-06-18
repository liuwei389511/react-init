/** @format */
import "./style.css";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <>
      <h1 className="text-8xl font-bold  text-[aqua]">Hello World</h1>
    </>
  );
};
const container = document.getElementById("app");
if (!container) {
  throw new Error("Faild to find the root element");
}

const root = createRoot(container);
root.render(<App />);
