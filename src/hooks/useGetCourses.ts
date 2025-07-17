import http from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetCourses = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: () => http.courses.coursesControllerFindAll(),
  });
  const courses = data;
  return { courses, isLoading };
};

export default useGetCourses;
