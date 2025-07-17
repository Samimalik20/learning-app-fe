import http from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetModules = (courseId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["modules", courseId],
    queryFn: () =>
      http.modules.modulesControllerFindAll({
        courseId: courseId,
      }),
  });
  const modules = data;
  return { modules, isLoading };
};

export default useGetModules;
