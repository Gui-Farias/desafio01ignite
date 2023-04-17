export function SearchBar() {
  return (
    <form className="flex gap-2 -m-6 mb-16">
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        className="rounded-lg p-4 flex-1 text-white"
      />
      
      <button type="submit" className="bg-blue-500 text-white p-4 rounded-lg flex items-center after:content-['+'] after:border after:rounded-full after:w-4 after:ml-2 after:text-xs after:leading-none after:block after:aspect-square">
        Criar
      </button>
    </form>
  )
}
