import { useQuery } from "@tanstack/react-query";

export default function useTerminal(token) {
  const BASE_URL = import.meta.env.VITE_TERMINAL;

  const { data, isLoading, isFetched } = useQuery({
    queryKey: ["terminal"],
    queryFn: async () => {
      const response = await fetch(BASE_URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json());
      return response;
    },
  });

  console.log(data);
  return { data, isLoading, isFetched };
}
