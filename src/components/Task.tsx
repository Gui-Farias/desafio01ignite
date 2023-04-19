import { Trash } from '@phosphor-icons/react';
import { ChangeEvent, MouseEvent, useState } from 'react';

interface Task {
  id: string;
  task: string;
  onCompletedTask: (TaskCompleted:string) => void;
  onDeleteTask: (id:string) => void;
}

export function Task({task, id, onCompletedTask, onDeleteTask}:Task) {
  const [checked, setChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleCheckTask(event:MouseEvent<HTMLElement> | ChangeEvent<HTMLInputElement>) {
    setChecked(prevState => !prevState)
    onCompletedTask(id);
    
    const target = event.target as HTMLElement | HTMLInputElement; 
    target.classList.toggle('line-through');
    target.classList.toggle('text-neutral-400');
    target.classList.toggle('text-white');
  }

  return (
    <div className="flex items-center py-4 px-5 rounded-lg bg-neutral-700 text-white gap-4 border border-neutral-500 relative mt-4" onClick={handleCheckTask}>
      <input type="checkbox" onChange={handleCheckTask} name={task} id={task} checked={checked} className="checked:bg-indigo-800 hover:bg-indigo-800 active:bg-indigo-800 focus:bg-indigo-800 bg-transparent border-blue-400 border-2 rounded-full mr-2" />
      {task}
      <button className="absolute right-5 top-4" onClick={handleDeleteTask}>
        <Trash size={24}/>
      </button>
    </div>
  )
}
