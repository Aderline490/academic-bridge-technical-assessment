import { useState } from "react";

import TaskCard from "../components/TaskCard";
import TaskTab from "../components/TaskTab";
import NewTask from "../components/NewTask";

import person1 from "../assets/face-1.jpg";
import person2 from "../assets/face-2.jpg";
import person3 from "../assets/face-3.jpg";
import person4 from "../assets/face-4.jpg";

import { Task } from "../types/Task";
import {useTasks, useCreateTask, useDeleteTask} from "../hooks/taskHooks"

const Tasks = () => {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedTab, setSelectedTab] = useState("all");
  const [isModalOpen, setModalOpen] = useState(false);

  const { data: tasks, isLoading, error } = useTasks();
  const addTaskMutation = useCreateTask();
  const deleteTaskMutation = useDeleteTask();

  
  const totalTasks = tasks?.length || 0;
  const completedTasksCount = tasks?.filter(task => task.completed).length || 0;
  const toDoTasksCount = totalTasks - completedTasksCount;

  
  const filteredTasks = tasks?.filter(task => {
    if (selectedTab === "completed") return task.completed;
    if (selectedTab === "todo") return !task.completed;
    return true;
  });

  const handleTabChange = (tab:any) => {
    setSelectedTab(tab);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText("https://example.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  const handleAddTask = (newTask: Task) => {
    addTaskMutation.mutate(newTask);
  };

  const handleDeleteTask = (taskId:number) => {
    deleteTaskMutation.mutate(taskId);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);


  return (
    <div className="dark:bg-dark_bg bg-light_bg w-full flex flex-col p-8 space-y-20 pr-24">
      <NewTask isOpen={isModalOpen} onClose={closeModal} handleAddTask={handleAddTask}/>
      <div className="w-full flex space-x-1 justify-between">
        <div>
          <div className="space-y-6">
            <p className="text-md font-bold dark:text-white">
              {" "}
              <span className="text-[#9F9DA5]">
                Workspace &gt; Creative &gt;
              </span>{" "}
              Creative Website
            </p>
            <h1 className="text-4xl font-extrabold dark:text-white">Website Design</h1>
            <div className="flex space-x-6">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-gray"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <p className="font-bold dark:text-white">Limited Access</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-gray"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <hr className="w-[2px] h-8 text-light_gray bg-light_gray"></hr>
              <div className="flex ">
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
                <img
                  src={person4}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover -ml-2 border border-1 border-white"
                />

                <div className="w-8 h-8 border rounded-full bg-gray text-sm text-white flex justify-center items-center -ml-2 border-white">
                  <p>+2</p>
                </div>

                <div className="w-8 h-8 border rounded-full bg-main text-lg text-white flex justify-center items-center ml-6 border-white">
                  <p>+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-16">
          <div className="flex flex-col items-end w-full">
            <p className="dark:text-white">From 23 April</p>
            <div className="flex items-center space-x-2">
              <div className="bg-green-500 h-2 w-2 rounded-full"></div>
              <p className="text-gray dark:font-bold">Updated 12 min ago</p>
            </div>
          </div>
          <div className="flex space-x-6 items-center">
            <div
              onClick={handleCopy}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => {
                setHovered(false);
                setCopied(false);
              }}
              className="text-gray hover:text-main cursor-pointer"
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
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
            </div>

            <hr className="w-[2px] h-8 text-light_gray bg-light_gray"></hr>
            <div className="flex flex-col space-y-1 cursor-pointer">
              <div className="h-[8px] w-5 rounded-sm bg-gray hover:bg-main"></div>
              <div className="h-[8px] w-5 rounded-sm bg-gray hover:bg-main"></div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-gray"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>
          </div>
          {(hovered || copied) && (
            <div className="absolute transform -translate-x-1/2 -bottom-8 bg-main text-center text-white text-sm font-semibold py-1 px-3 rounded-md shadow-lg transition-opacity duration-200">
              {copied ? "Link Copied!" : "Copy Link"}
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col space-y-8">
          <TaskTab onTabChange={handleTabChange}
        totalTasks={totalTasks}
        completedTasksCount={completedTasksCount}
        toDoTasksCount={toDoTasksCount}
        activeTab={selectedTab}
        openModal={openModal}
        />

          <TaskCard  tasks={filteredTasks} onDeleteTask={handleDeleteTask}/>
      </div>
      {/* <div className="fixed absolute left-100 w-[500px] h-screen bg-gray">

      </div> */}
    </div>
  );
};

export default Tasks;
