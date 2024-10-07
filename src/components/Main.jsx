import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Handles the addition of todo
  const handleAdd = ()=>{
    setTodos([...todos, {id: uuidv4(), todo, isComplted: false}])
    setTodo("");
  }

  // Handles the change of todo
  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  // Handles checkbox logic
  const handlCheckbox = (e)=>{
    let id = e.target.name
    let index = todos.findIndex(item=>{
      return id === item.id
    })
    let newTodos = [...todos]
    newTodos[index].isComplted = !newTodos[index].isComplted;
    setTodos(newTodos)
  } 

  // Handles the editing of todo
  const handleEdit = (e, id)=>{
    let t = todos.filter(item=>
      item.id === id
    )
    setTodo(t[0].todo);
    let newTodods = todos.filter(item=>{
      item.id !== id;
    })
    setTodos(newTodods)
  }
  // Handles the deletion of todo
  const handleDelete = (id)=>{
    
  }

  return (
    <div>
      <div className="container mx-auto font-display">
          <div className='flex flex-col bg-violet-600 mx-[4rem] max-sm:mx-[1rem] border-x-4 border-b-4 rounded-b-xl '>
            <div className="input max-md:m-5 max-sm:flex-col flex items-center justify-center gap-5">
              <label className=' text-sm max-sm:text-sm mt-2 text-white' htmlFor="">Enter Todo:</label>
              <input onChange={handleChange} value={todo} type="text" className='bg-slate-300 my-3 max-sm:my-1 rounded-sm w-[60%] px-2'/>
              <button onClick={handleAdd} disabled={todo.length<4} className='bg-green-600 max-sm:mb-2 px-2 py-1 rounded-lg text-center font-medium '>Add Todo</button>
            </div>
            <div className="list bg-violet-200 p-4">

              <h1 className='text-xl font-semibold ml-2 mb-2'>YOUR TODOS</h1>
                {todos.map(item=>{ 
                    return <div key={item.id} className='todo p-2 flex items-center'>
                    
                    <div className="1 flex gap-4 w-[90%]">
                      <input onChange={handlCheckbox} type="checkbox" name={item.id}/>
                      <div className={item.isComplted?"line-through":""}>{item.todo}</div>
                    </div>
                    <div className="2 flex gap-4 items-center">
                      <button onClick={(e)=>handleEdit(e, item.id)} className='bg-blue-400 text-white px-2 rounded-lg text-center font-medium max-sm:font-medium'>Edit</button>
                      <button onClick={handleDelete} className='bg-red-600 text-white px-2 rounded-lg text-center font-medium max-sm:font-medium'>Delete</button>
                    </div>
                    </div>  
                  })}
            </div>
          </div>
        </div>
    </div> 
  )
}

export default Main
