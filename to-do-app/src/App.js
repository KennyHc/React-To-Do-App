import { useState, useEffect } from 'react';
import Tasks from './components/Tasks';
import Header from './components/Header';
import AddTask from './components/AddTask';

function App() {

  const [showAddTask, setShowAddTask] = useState (false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    console.log(data)
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    console.log(data)
    return data
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

  
    setTasks(tasks.filter((task) => task.id !==id))
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()


    setTasks(
      tasks.map((task) => 
      id === task.id ? {...task, reminder: data.reminder} : task)
      )
  }


  return ( 
    <div className= "container">
      
      
      <Header onAdd = {() => setShowAddTask(!showAddTask)} 
              title = 'My ToDo List!' 
              showAdd = {showAddTask}
      />

      {showAddTask ? <AddTask onAdd={addTask}/> : <></>}
      {tasks.length > 0 ? 
      (<Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
       :
       (<h2>All Tasks are done!</h2>)
       }
        
  
    </div>
  )
}

export default App;
