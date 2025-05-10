import { createBrowserRouter } from "react-router-dom";
import { Landingroutes } from "./Landing.routes";
import { PanelRoutes } from "./Panel.routes";
import { LoginRoutes } from "./Login.routes";

const router = createBrowserRouter([Landingroutes, PanelRoutes, LoginRoutes]);
export default router;
