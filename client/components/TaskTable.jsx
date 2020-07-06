import React from 'react'
import { connect } from 'react-redux'

import { fetchTasks } from '../actions'

import LoadingSpinner from './LoadingSpinner'
import Task from './Task'

class TaskTable extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }

  render() {
    return (
      <>
      {this.props.loading && <LoadingSpinner />}
      {!this.props.loading &&
        <table className="u-full-width">
          <thead>
            <tr>
              <th>Date added</th>
              <th>Task</th>
              <th>Details</th>
              <th>Priority</th>
              <th>Due date</th>
              <th>Completed</th>
            </tr>
          </thead>
            <tbody>
              {this.props.tasks.map(task => (
                <Task key={task.id} task={task} />)
              )}
            </tbody>
        </table>
      }
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    loading: globalState.loading,
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(TaskTable)