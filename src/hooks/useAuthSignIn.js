import { useQuery } from "@tanstack/react-query";
import AuthSignIn from "../service/AuthSignIn";
import { useState } from "react";

export default function useAuthSignIn() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();

  const { data, isLoading, isFetched } = useQuery({
    queryKey: ["auth", id, password],
    queryFn: () => AuthSignIn(id, password),
  });

  function setData(id, pass) {
    setId(id);
    setPassword(pass);
  }
  return { data, setData, isLoading, isFetched };
}
