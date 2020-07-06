import React from 'react'

const Task = () => {
  return (
    <tbody>
      <tr>
        <td>{this.props.date_added}</td>
        <td>{this.props.task}</td>
        <td>{this.props.description}</td>
        <td>{this.props.priority}</td>
        <td>{this.props.due_date}</td>
        <td>{this.props.completed}</td>
      </tr>
    </tbody>
  )
}

export default Task