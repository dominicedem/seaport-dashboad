import { useQuery } from "@tanstack/react-query";

export default function useMaintainance(token) {
  const BASE_URL = import.meta.env.VITE_MAINTAINANCE;

  const { data, isLoading, isFetched } = useQuery({
    queryKey: ["maintainance"],
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

  return { data, isLoading, isFetched };
}
