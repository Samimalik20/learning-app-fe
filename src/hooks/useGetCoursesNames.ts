import http from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetCoursesNames = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["coursesNames"],
    queryFn: () => http.courses.coursesControllerFindByNames(),
  });
  const coursesNames = data;
  return { coursesNames, isLoading };
};

export default useGetCoursesNames;