import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect } from "react";
import getCurrentUser from "./services/user";
import { UserProvider } from "./store/context/useCurrentUser";

const App: React.FC = () => {
  useEffect(() => {
    getCurrentUser();
  });

  return (
    <>
      <UserProvider>
        <RouterProvider router={routes} />;
      </UserProvider>
    </>
  );
};

export default App;
