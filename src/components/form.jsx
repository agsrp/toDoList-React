import React from 'react'

const Form = ({addTaski, handleChange, taski}) => {
  return (
    <div>
        <form onSubmit={addTaski}>
            <input type="text" value={taski} placeholder='Ingresar tarea' onChange={handleChange}/>
            <button type="submit">Añadir</button>
        </form>
    </div>
  )
}

export {Form}