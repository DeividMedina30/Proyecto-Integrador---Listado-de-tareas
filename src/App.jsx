import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componets/Header';
import { Task } from './componets/Task';
import { TaskList } from './componets/TaskList';

const tareas = [
  {name: "Task 1 to do",
   state: "to do"
  },
  {name: "Task 2 to do",
   state: "to do"
  },
  {name: "Task 4 to do",
   state: "completed"
  }
];

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskList list={tareas}/>
    </div>
  )
}

export default App
