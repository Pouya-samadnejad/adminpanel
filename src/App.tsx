import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect } from "react";
import { getCurrentUser } from "./services/user";

const App: React.FC = () => {
  useEffect(() => {
    getCurrentUser();
  });

  return <RouterProvider router={routes} />;
};

export default App;
