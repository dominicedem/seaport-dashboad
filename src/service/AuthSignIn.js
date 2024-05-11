const BASE_URL = import.meta.env.VITE_userStatus;
export default async function AuthSignIn(userId, password) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      password,
    }),
  }).then((res) => res.json());
  return response;
}
