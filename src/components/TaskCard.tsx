import person1 from "../assets/face-1.jpg";
import person2 from "../assets/face-2.jpg";
import person3 from "../assets/face-3.jpg";

import { Task } from "../types/Task";

interface TaskCardProps {
  tasks: Task[];
  onDeleteTask: (taskId: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ tasks, onDeleteTask }) => {
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
              <p>{task.completed ? "Completed" : "To do"}</p>
            </div>
            <div className="text-gray">
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
            {/* <div className="h-[50px] w-[100px] bg-gray"> */}

            {/* </div> */}
          </div>
          <div>
            <p className="text-lg font-bold dark:text-white">{task.todo}</p>
            <p className="text-sm text-gray">Landing Page UI</p>
          </div>
          <hr className="w-full h-1 text-light_gray text-center"></hr>
          <div className="flex justify-between">
            <div className="flex">
              <img
                src={person1}
                alt=""
                className="w-8 h-8 rounded-full object-cover border border-1 border-white"
              />
              <img
                src={person2}
                alt=""
                className="w-8 h-8 rounded-full object-cover border border-1 border-white -ml-2"
              />
              <img
                src={person3}
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
          {/* <div className="absolute w-[200px] h-[70px] bg-gray">

          </div> */}
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
