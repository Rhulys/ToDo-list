import React, {useState} from "react";

interface Props {
  addTask: (task: string) => void
}

const AddTaskForm: React.FC<Props> = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
};
  return (
    <form onSubmit={handleSubmit} className="bg-green-500 w-3/4 mt-2 rounded-2xl flex flex-col my-10">
      <input
        type="text"
        placeholder="Tarefa..."
        className="bg-transparent border-b border-white placeholder:text-white md:pl-5 outline-none w-auto m-10"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="bg-green-700 rounded-xl mx-10 mb-5">
        Cadastrar
      </button>
    </form>
  );
};

export default AddTaskForm;
