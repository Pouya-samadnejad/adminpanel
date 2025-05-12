import { createContext, useContext, useEffect, useState } from "react";
import getCurrentUser from "../../services/user";

// const useCurrentUser = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     getCurrentUser()
//       .then((res) => {
//         setCurrentUser(res.data);
//       })
//       .catch((err) => {
//         setError(err);
//         console.error(err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   return { currentUser, loading, error };
// };

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        setCurrentUser(res.data); 
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}

function useCurrentUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useCurrentUser must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useCurrentUser };
