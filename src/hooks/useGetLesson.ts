import http from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetLesson = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["lesson", id],
    queryFn: () => http.lessons.lessonsControllerFindOne(id),
  });
  const lesson = data;
  return { lesson, isLoading };
};

export default useGetLesson;
