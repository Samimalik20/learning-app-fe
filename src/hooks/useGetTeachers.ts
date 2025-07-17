import http from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetTeachers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["teachers"],
    queryFn: () => http.teachers.teacherControllerGetAllTeachers(),
  });
  const teachers = data;
  return { teachers, isLoading };
};

export default useGetTeachers;
