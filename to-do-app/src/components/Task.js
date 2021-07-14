import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div 
        className = {`task ${task.reminder ?
         'reminder' : '' }`} 
        style = {{backgroundColor: '#9EDDEF'}}
        onDoubleClick = {() => {onToggle(task.id)}}
        >
            <h3> {task.text}{' '}
            <FaTimes
             onClick = {() => onDelete(task.id)}
             style = {{color : '#e06377', cursor: 'pointer'}}
              /> 
            </h3>
            <h5> {task.day} </h5>
        </div>
    )
}

export default Task
