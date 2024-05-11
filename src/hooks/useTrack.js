import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const BASE_URL = import.meta.env.VITE_TRACK;
export default function useTrack() {
  const [containerNumbers, setContainerNumbers] = useState("");

  const { data, isLoading, isFetched, error, isError } = useQuery({
    queryKey: ["track", containerNumbers],
    queryFn: async () => {
      const response = await fetch(BASE_URL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          containerNumber: containerNumbers,
        }),
      }).then((res) => res.json());
      return response;
    },
  });

  function setTrack(id) {
    setContainerNumbers(id);
  }
  return { data, setTrack, isLoading, isFetched, error };
}
