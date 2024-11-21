import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import { Form } from './components/form'
import { Taski } from './components/task'



function App() {

  const [taski, setTaski] = useState('')
  const [taskis, setTaskis] = useState([])

  const handleChange = e => {
    setTaski(e.target.value)
  }

  const addTaski = e => {
    e.preventDefault();
    if(taski.trim()==''){
      alert('Agregar texto.')
      return;
    }

    const newTaski = {
      id: Date.now(),
      taski,
      completa: false
    }

    const totTaski = [newTaski, ...taskis]
    setTaskis(totTaski);
    setTaski('')
  }

  const trash = id => {
    const Refresh = taskis.filter(taski => {
      return taski.id != id
    })
    setTaskis(Refresh)
  }

  return (
    <>
      <h1 id='titHome'>LISTA DE TAREAS</h1>
      <p className='pTarea'>Escribí la tarea a realizar:</p>
      <Form
        addTaski = {addTaski}
        handleChange = {handleChange}
        taski = {taski}
      />
      {taskis.length>1&&(
        <button onClick={()=>setTaskis([])}>Vaciar todo</button>
      )}
      {taskis.map(taski => (
        <Taski
        key = {taski.id}
        id = {taski.id}
        taski = {taski}
        trash = {trash}
      />
      ))}
      
    </>
  )
}

export default App
