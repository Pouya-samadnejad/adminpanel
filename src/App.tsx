import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const App: React.FC = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
