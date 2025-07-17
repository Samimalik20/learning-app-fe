import http from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetModule = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["lessons", id],
    queryFn: () => http.modules.modulesControllerFindOne(id),
  });
  const module = data;
  return { module, isLoading };
};

export default useGetModule;
