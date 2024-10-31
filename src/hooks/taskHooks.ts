import {
  useQuery,
  useMutation,
  useQueryClient
} from "@tanstack/react-query";
import { Task } from "../types/Task";
import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

export const useTasks = () => {
  const queryClient = useQueryClient();
  return useQuery<Task[], Error>({
    queryKey: ["tasks"],
    queryFn: getTasks,
    initialData: () => {
      return queryClient.getQueryData(["tasks"]) ?? [];
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export const useTaskById = (id: number) => {
  return useQuery<Task, Error>({
    queryKey: ["task", id],
    queryFn: () => getTaskById(id),
  });
};

// export const useCreateTask = () => {
//   const queryClient = useQueryClient();

//   return useMutation<Task, Error, Omit<Task, "id">>(
//     {
//       mutationFn: (newTaskData) => createTask(newTaskData),
//       onSuccess: () => {
//         queryClient.invalidateQueries({queryKey: ['tasks']});
//       },
//     }
//   );
// };

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation<Task, Error, Omit<Task, "id">>(
    {
      mutationFn: async (newTaskData) => {
        const newTask = await createTask(newTaskData);
        console.log(newTask);
        queryClient.setQueryData<Task[]>(["tasks"], (oldTasks = []) => [
          ...oldTasks,
          newTask,
        ]);

        console.log("Updated cache:", queryClient.getQueryData(["tasks"]));

        return newTask;
      },
      // onSuccess: () => {
      //   queryClient.invalidateQueries({ queryKey: ["tasks"] });
      // },
    }
  );
};

// export const useUpdateTask = () => {
//   const queryClient = useQueryClient();
//   return useMutation<Task, Error, { id: number; taskData: Partial<Task> }>({
//     mutationFn: ({ id, taskData }) => updateTask(id, taskData),
//     onSuccess: () => queryClient.invalidateQueries({queryKey: ['tasks']}),
//   });
// };

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation<Task, Error, { id: number; taskData: Partial<Task> }>({
    mutationFn: async ({ id, taskData }) => {
      await updateTask(id);
      return { id, ...taskData } as Task;
    },
    onSuccess: (updatedTask) => {
      queryClient.setQueryData<Task[]>(["tasks"], (oldTasks = []) =>
        oldTasks.map((task) =>
          task.id === updatedTask.id ? { ...task, ...updatedTask } : task
        )
      );
      console.log("Task updated in cache:", updatedTask);
      console.log("Updated cache:", queryClient.getQueryData(["tasks"]));
      // queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

// export const useDeleteTask = () => {
//   const queryClient = useQueryClient();
//   return useMutation<void, Error, number>({
//     mutationFn: deleteTask,
//     onSuccess: () => queryClient.invalidateQueries({queryKey: ['tasks']}),
//   });
// };


export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>({
    mutationFn: deleteTask,
    onSuccess: (deletedTaskId) => {
      queryClient.setQueryData<Task[]>(["tasks"], (oldTasks = []) =>
        oldTasks.filter((task) => task.id !== deletedTaskId)
      );

      console.log("Task deleted from cache:", deletedTaskId);
      console.log("Updated cache:", queryClient.getQueryData(["tasks"]));
    },
  });
};