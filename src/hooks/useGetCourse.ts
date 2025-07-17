import http from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetCourse = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["course", id],
    queryFn: () => http.courses.coursesControllerFindOne(id),
  });
  const course = data;
  return { course, isLoading };
};

export default useGetCourse;
