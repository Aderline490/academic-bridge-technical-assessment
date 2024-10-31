import { useTranslation } from "react-i18next";

interface TaskTabProps {
  onTabChange: (tab: string) => void;
  totalTasks: number;
  completedTasksCount: number;
  toDoTasksCount: number;
  activeTab: string;
  openModal: () => void;
}

const TaskTab: React.FC<TaskTabProps> = ({
  onTabChange,
  totalTasks,
  completedTasksCount,
  toDoTasksCount,
  activeTab,
  openModal,
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex dark:bg-dark_white bg-white h-16 rounded-3xl items-center p-8 justify-between">
      <div className="flex space-x-8 text-sm">
        <div
          className={`flex space-x-4 cursor-pointer ${
            activeTab == "all" ? "font-bold text-main" : "text-gray"
          }`}
          onClick={() => onTabChange("all")}
        >
          
            <p className={`dark:font-bold ${activeTab == "all" && "font-bold"}`}>{t('alltasks')}</p>
            <div
              className={`w-7 h-5 flex items-center justify-center rounded-md ${
                activeTab == "all" ? "bg-light_main  dark:bg-dark_bg" : "bg-light_gray dark:bg-dark_bg"
              }`}
            >
              <p className={`text-[12px] ${activeTab == "all" ? "font-bold" : "text-gray"}`}>{totalTasks}</p>
            </div>
        </div>
        <div
          className={`flex space-x-4 cursor-pointer ${
            activeTab == "todo" ? "font-bold text-main" : "text-gray"
          }`}
          onClick={() => onTabChange("todo")}
        >
          <p className={`dark:font-bold ${activeTab == "todo" && "font-bold"}`}>{t('todo')}</p>
          <div  className={`w-7 h-5 flex items-center justify-center rounded-md ${
                activeTab == "todo" ? "bg-light_main  dark:bg-dark_bg" : "bg-light_gray dark:bg-dark_bg"
              }`}>
            <p className={`text-[12px] ${activeTab == "todo" ? "font-bold" : "text-gray"}`}>{toDoTasksCount}</p>
          </div>
        </div>
        <div
           className={`flex space-x-4 cursor-pointer ${
            activeTab == "inprogress" ? "font-bold text-main" : "text-gray"
          }`}
          onClick={() => onTabChange("inprogress")}
        >
          <p className={`dark:font-bold ${activeTab == "inprogress" && "font-bold"}`} >{t('inProgress')}</p>
          <div  className={`w-7 h-5 flex items-center justify-center rounded-md ${
                activeTab == "inprogress" ? "bg-light_main  dark:bg-dark_bg" : "bg-light_gray dark:bg-dark_bg"
              }`}>
            <p className={`text-[12px] ${activeTab == "inprogress" ? "font-bold" : "text-gray"}`}>0</p>
          </div>
        </div>
        <div
          className={`flex space-x-4 cursor-pointer ${
            activeTab == "completed" ? "font-bold text-main" : "text-gray"
          }`}
          onClick={() => onTabChange("completed")}
        >
          <p className={`dark:font-bold ${activeTab == "completed" && "font-bold"}`}>{t('completed')}</p>
          <div  className={`w-7 h-5 flex items-center justify-center rounded-md ${
                activeTab == "completed" ? "bg-light_main  dark:bg-dark_bg" : "bg-light_gray dark:bg-dark_bg"
              }`}>
            <p className={`text-[12px] ${activeTab == "completed" ? "font-bold" : "text-gray"}`}>{completedTasksCount}</p>
          </div>
        </div>
      </div>
      <div className="flex text-gray space-x-4 text-sm cursor-pointer">
        <div className="flex space-x-2 border border-light_gray rounded-lg px-6 py-2 ">
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
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          <p className='dark:font-bold'>{t('filterandsort')}</p>
        </div>
        <div className="dark:font-bold flex space-x-2 border border-light_gray rounded-lg px-6 py-2 cursor-pointer" onClick={openModal}>
          + {t('newtask')}
        </div>
      </div>
    </div>
  );
};

export default TaskTab;
