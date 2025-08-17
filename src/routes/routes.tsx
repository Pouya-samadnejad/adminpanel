import { createBrowserRouter } from "react-router-dom";
import { PanelRoutes } from "./Panel.routes";
import { LoginRoutes } from "./Login.routes";
import { ErrorRoutes } from "./Errors.routes";

const router = createBrowserRouter([PanelRoutes, LoginRoutes, ErrorRoutes]);
export default router;
