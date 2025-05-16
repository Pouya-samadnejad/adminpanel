import { createBrowserRouter } from "react-router-dom";
import { Landingroutes } from "./Landing.routes";
import { PanelRoutes } from "./Panel.routes";
import { LoginRoutes } from "./Login.routes";
import { ErrorRoutes } from "./Errors.routes";

const router = createBrowserRouter([
  Landingroutes,
  PanelRoutes,
  LoginRoutes,
  ErrorRoutes,
]);
export default router;
