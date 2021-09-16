import { useAuth } from "../../hooks/useAuth";

export function Home() {
  const { user, loading, logout } = useAuth();

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <h1>{user.email}</h1>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </>
      )}
    </>
  );
}
