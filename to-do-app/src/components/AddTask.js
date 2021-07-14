import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className ='add-form' onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label> Task </label>
                <input type= 'text' placeholder='Add Task' value={text} 
                onChange={(e)=> {setText(e.target.value)}}/>
            </div>
            <div className = 'form-control'>
                <label> Date </label>
                <input type= 'text' placeholder='Add Date' value={day}
                onChange={(e)=> {setDay(e.target.value)}}/>
            </div>
            <div className = 'form-control'>
                <label> Set reminder </label>
                <input type= 'checkbox'
                       value={reminder}
                       checked={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input className = 'btn btn-block' 
            type= 'submit' value='Save Task' >

            </input>
        </form>
    )
}

export default AddTask
