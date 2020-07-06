import React from 'react'
import { connect } from 'react-redux'

import Task from './Task'

function TaskTable(props) {
  return (
    <table className="u-full-width">
      <thead>
        <tr>
          <th>Date added</th>
          <th>Task</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Due date</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {props.tasks.map((task) => <Task key={task.id} task={task} />)}
      </tbody>
    </table>
  )
}

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(TaskTable)