import React, { useState } from 'react'

const TaskManager = () => {
    const[input,setInput]=useState('')
    const [task, setTask] = useState([]);
    const addTask = (e) => {
        e.preventDefault();
        if (input.trim() === '') return alert('Enter task')
        setTask([...task, input])
        setInput('')
    }

    const deleteTask = (indexToDelete) => {
        const updateTask = task.filter((_, index) => index !== indexToDelete);
        setTask(updateTask)
    }
  return (
      <>
          <div className="container text-white p-2 m-2">
              <h3 className="font-bold text-xl">Task Manager</h3>
              <p >Manage Your Tasks easly</p>
              <form onSubmit={addTask}>
                  <label>Task:</label>
                  <input type='text' className='border rounded-xl p-0.5' placeholder='Enter your Task..' value={input} onChange={(e) => setInput(e.target.value)} />
                  <button className='border rounded p-1 m-1 cursor-pointer' type='submit'>Addtask</button>
              </form>
              <div className="container flex flex-col mt-4">
                  <h3 className='font-bold'>Your Task List</h3>
                  {task.map((i,index) => (
                      <div key={index}  className="flex justify-between items-center border-b p-2 w-64">
                          <p>{i}</p>
                          <button onClick={()=>deleteTask(index)} className='text-xs px-2 py-1 rounded cursor-pointer border'>DeletTask</button>
                      </div>
                  ))}
              </div>
         </div>
      </>
  )
}

export default TaskManager