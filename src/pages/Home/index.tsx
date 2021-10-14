import { useCallback } from "react";
import { Preloader } from "../../components/Preloader";

import { useAuth } from "../../hooks/useAuth";

import * as S from "./styles";

export function Home() {
  const { user, loading, logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <S.PreloaderContent>
          <Preloader />
        </S.PreloaderContent>
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
