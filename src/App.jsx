import './App.css'
import Header from './componets/Header';
import { TaskList } from './componets/TaskList';
import { tareasLista } from './utils/tasks';



function App() {
  return (
    <div className="App">
      <Header/>
      <TaskList list={tareasLista} />
    </div>
  )
}

export default App
