import React, { useState, useEffect } from "react";

import { Task } from "../types/Task";

interface NewTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleAddTask: (newTask: Task) => void;
  handleEditTask: (newTask: Task) => void;
  taskToEdit?: Task | null;
}

const NewTask: React.FC<NewTaskModalProps> = ({ isOpen, onClose, handleAddTask, handleEditTask, taskToEdit }) => {
    const [title, setTitle] = useState(taskToEdit?.todo || "");
  const [taskData, setTaskData] = useState<Task>(taskToEdit || { id: 0, todo: "", completed: false, userId: 1 });
  
  useEffect(() => {
    if (taskToEdit) {
      setTaskData(taskToEdit);
      setTitle(taskToEdit.todo);
    }
  }, [taskToEdit]);

  const handleSubmit = () => {
    if (taskToEdit) {
      handleEditTask(taskData);
    } else {
      handleAddTask(taskData);
    }
    onClose();
  };
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed z-100 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="dark:bg-dark_white bg-white rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">New Task</h2>
        <button onClick={onClose} className="absolute top-2 right-2 dark:text-white text-gray-400 hover:text-gray-600">✕</button>

        <label className="block mb-2">
          <span className="text-gray-700 dark:text-white">Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => {
                setTitle(e.target.value);
                setTaskData({ ...taskData, todo: e.target.value });
              }}
            className="mt-1 block w-full h-[50px] bg-light_main outline-none rounded-md shadow-sm focus:ring focus:ring-main p-4"
          />
        </label>

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 dark:bg-dark_bg bg-gray-300 dark:text-gray text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-main text-white rounded-md hover:bg-indigo-700"
            onClick={handleSubmit}
          >
            {taskToEdit ? "Update Task" : "Add Task"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
