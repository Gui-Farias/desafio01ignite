import { ChangeEvent, FormEvent, useState } from "react"
import { Notepad } from '@phosphor-icons/react';

import { Task } from './Task';

export function Content() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  
  function handleNewTask(event:ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleCreateTask(event:FormEvent<HTMLElement>) {
    event.preventDefault()
    setTasks([...tasks, newTask])
    setNewTask('')
  }

  function deleteTask(taskToDelete:string) {
    const tasksAfterDeleteOne = tasks.filter(task => {
      return task !== taskToDelete;
    })
    setTasks(tasksAfterDeleteOne)
  }

  return (
    <div className="">
      <form className="flex gap-2 -m-6 mb-16" onSubmit={handleCreateTask}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          className="rounded-lg p-4 flex-1 text-white bg-neutral-700"
          onChange={handleNewTask}
          value={newTask}
          required
        />
        
        <button type="submit" className="bg-blue-500 text-white p-4 rounded-lg flex items-center after:content-['+'] after:border after:rounded-full after:w-4 after:ml-2 after:text-xs after:leading-none after:block after:aspect-square">
          Criar
        </button>
      </form>

      <div className="flex justify-between border-b border-neutral-700 pb-5 font-bold">
        <h4 className="text-blue-500 flex gap-2">Tarefas Criadas <span className="bg-neutral-700 p-1 rounded-full w-6 h-5 flex items-center justify-center text-white text-xs">{tasks.length}</span></h4>
        <h4 className="text-purple-400 flex gap-2">Concluidas <span className="bg-neutral-700 p-1 rounded-full w-6 h-5 flex items-center justify-center text-white text-xs">{tasks.length}</span></h4>
      </div>

      <div className="mt-5">
        {tasks.length === 0 ? (
          <div className="flex justify-center flex-col items-center">
            <Notepad size={64} className="mt-10 mb-4"/>
            <p><b>Você ainda não tem tarefas cadastradas</b></p>
            <p> Crie tarefas e organize seus itens a fazer</p>
          </div>
          ): (
            tasks.map(task => {
              return <Task key={task} task={task} onDeleteTask={deleteTask} />
            })
          )
        }
      </div>
    </div>
  )
}
