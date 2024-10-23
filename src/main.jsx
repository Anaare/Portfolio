import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./components/App.jsx";
import "./index.css";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
