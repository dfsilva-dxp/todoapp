import { useCallback } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/useAuth";

export function Home() {
  const history = useHistory();
  const { user, loading, logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
    history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <h1>{user.email}</h1>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </>
  );
}
