import React, {useState} from 'react'
import '../tareas.css'



const Taski = ({taski, trash}) => {

    const [completa, setCompleta] = useState(false)

  return (
    <div className={completa?'cTarea cTareaCompleta':'cTarea'}>
        <h2 className={completa?'completada':'noCompleta'}>{taski.taski}</h2>
        <button id='completar' onClick={()=>setCompleta(!completa)}>{completa?'No completa':'Completa'}</button>
        <button onClick={()=>trash(taski.id)} id='eliminar'>Eliminar</button>
    </div>
  )
}

export {Taski}