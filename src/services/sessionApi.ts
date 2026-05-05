import { getToken } from "./tokenService";

export const fetchUserSessions = async () => {
  const token = getToken();
  const user_id = localStorage.getItem("user_id");
  const url = import.meta.env.VITE_API_URL;
  //console.log(url);
  const res = await fetch(`${url}/sessions/getSessionsByUser/${user_id}`, {
    headers: {
      Authorization: "Bearer " + token,
      "Content-type": "Application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user sessions");
  }

  return res.json();
};
