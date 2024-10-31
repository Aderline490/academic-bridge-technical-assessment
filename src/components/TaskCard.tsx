import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import { Task } from "../types/Task";

interface TaskCardProps {
  tasks: Task[];
  onDeleteTask: (taskId: number) => void;
  onEditTask: (task: Task) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ tasks, onDeleteTask, onEditTask , }) => {
  const { t } = useTranslation();

  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = (taskId: number) => {
    setActiveMenu(activeMenu === taskId ? null : taskId);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {tasks?.map((task: Task) => (
        <div className="w-[300px] dark:bg-dark_white bg-white h-auto rounded-3xl p-6 space-y-8">
          <div className="flex justify-between ">
            <div
              className={`w-20 h-7 text-sm rounded-md flex items-center justify-center ${
                task.completed
                  ? "dark:text-green-700 text-green-600 dark:bg-green-300 bg-green-100"
                  : "dark:bg-orange-300 bg-orange-100 text-orange-600 dark:text-orange-700"
              }`}
            >
              <p>{task.completed ? `${t('completed')}` : `${t('todo')}`}</p>
            </div>
            <div
              className="text-gray cursor-pointer"
              onClick={() => toggleMenu(task.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </div>
            {activeMenu === task.id && (
              <div className="absolute top-4 left-48 w-40 dark:bg-dark_bg bg-white dark:bg-gray-800 shadow-2xl rounded-md p-2 z-10" ref={menuRef}>
                <div className="flex space-x-4 w-full text-left px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" onClick={() => onEditTask(task)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                  <p>Edit</p>
                </div>
                <div
                  className="flex space-x-4 w-full text-left px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => onDeleteTask(task.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                  <p className="">Delete</p>
                </div>
              </div>
            )}
          </div>
          <div>
            <p className="text-lg font-bold dark:text-white">{task.todo}</p>
            <p className="text-sm text-gray">Landing Page UI</p>
          </div>
          <hr className="w-full h-1 text-light_gray text-center"></hr>
          <div className="flex justify-between">
            <div className="flex">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                alt=""
                className="w-8 h-8 rounded-full object-cover border border-1 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f"
                alt=""
                className="w-8 h-8 rounded-full object-cover border border-1 border-white -ml-2"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt=""
                className="w-8 h-8 rounded-full object-cover -ml-2 border border-1 border-white"
              />
            </div>
            <div className="flex space-x-2 text-gray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
              <p>3</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
