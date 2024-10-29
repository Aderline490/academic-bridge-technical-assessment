const TaskTab = () => {
  return (
    <div className="w-full flex bg-white h-16 rounded-3xl items-center p-8 justify-between">
      <div className="flex space-x-8 text-sm">
        <div className="flex space-x-4">
          <p className="text-gray">All Tasks</p>
          <div className="w-7 h-5 flex items-center justify-center rounded-md bg-light_gray">
            <p className="text-gray text-sm">23</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <p className="text-gray">To do</p>
          <div className="w-7 h-5 flex items-center justify-center rounded-md bg-light_gray">
            <p className="text-gray">3</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <p className="text-gray">In progress</p>
          <div className="w-7 h-5 flex items-center justify-center rounded-md bg-light_gray">
            <p className="text-gray">2</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <p className="text-gray">Completed</p>
          <div className="w-7 h-5 flex items-center justify-center rounded-md bg-light_gray">
            <p className="text-gray">8</p>
          </div>
        </div>
      </div>
      <div className="flex text-gray space-x-4 text-sm">
        <div className="flex space-x-2 border border-light_gray rounded-lg px-6 py-2">
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
          <p>Filter & Sort</p>
        </div>
        <div className="flex space-x-2 border border-light_gray rounded-lg px-6 py-2">
            +  New Task
        </div>
      </div>
    </div>
  );
};

export default TaskTab;
