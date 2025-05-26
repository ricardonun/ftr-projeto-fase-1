import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { NotFound } from "./Page/NotFound";
import { Redirect } from "./Page/Redirect";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/not-found", element: <NotFound /> },
  { path: "/redirect", element: <Redirect /> },
]);
