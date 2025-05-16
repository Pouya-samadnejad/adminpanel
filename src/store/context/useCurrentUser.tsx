import { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/user";

export const useCurrentUser = () => {
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

  return { currentUser, loading, error };
};
