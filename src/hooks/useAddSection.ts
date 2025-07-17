import http from '@/api';
import { Section } from '@/api/api';
import { getDefaultContent } from '@/app/dashboard/courses/[courseId]/modules/[moduleId]/lessons/[lessonId]/page';
import { useMutation, useQueryClient } from '@tanstack/react-query';


const useAddSection = (lessonId: string, onSuccessCallback?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (type: Section['type']) => {
      const newSection = {
        type,
        content: getDefaultContent(type),
        order: 0, // adjust this logic as needed
        lessonId, // if required by backend
      };
      return http.sections.sectionsControllerCreate(newSection);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['lesson', lessonId],
      });
      if (onSuccessCallback) onSuccessCallback();
    },
  });
};

export default useAddSection;
