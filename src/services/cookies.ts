import { destroyCookie, parseCookies, setCookie } from "nookies";

type Cookies = {
  set: (key: string, refreshToken: string) => void;
  get: () => { [key: string]: string };
  delete: (key: string) => void;
};

const cookies = {} as Cookies;

try {
  cookies.set = (key: string, refreshToken: string) => {
    setCookie(undefined, key, refreshToken, {
      maxAge: 60 * 60, // 1 hours
      path: "/",
    });
  };
  cookies.get = () => {
    const response = parseCookies();
    return response;
  };
  cookies.delete = (key: string) => destroyCookie(undefined, key);
} catch (error) {
  console.warn("Error reading localStorage key", error);
}

export default cookies;
