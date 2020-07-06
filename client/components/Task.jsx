import React from 'react'

const Task = (props) => {
  return (
      <tr>
        <td>{props.task.date_added}</td>
        <td>{props.task.task}</td>
        <td>{props.task.details}</td>
        <td>{props.task.priority}</td>
        <td>{props.task.due_date}</td>
        <td>{props.task.completed}</td>
      </tr>
  )
}

export default Task