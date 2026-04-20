export const getToken = () => {
    return localStorage.getItem('token');
}

export function parseJwt(token: string) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
}


export function isTokenValid(token: string | null) {
  if (!token) return false;

  const decoded = parseJwt(token);
  if (!decoded?.exp) return false;

  return decoded.exp * 1000 > Date.now();
}

