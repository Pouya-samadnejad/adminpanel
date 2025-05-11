import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const App: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default App;
