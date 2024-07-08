import React from "react";

interface Task {
  id: number;
  task: string;
}

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<Props> = ({ tasks, deleteTask }) => {
  return (
    <div className="w-3/4 md:w-1/2 mt-5">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between items-center p-2 border-b bg-white border-none rounded-xl mb-3 text-black"
        >
          <span>{task.task}</span>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-500 text-white p-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
