import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../actions'

// Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import LoadingSpinner from './LoadingSpinner'
import Task from './Task'
import AddTaskRow from './AddTaskRow'

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
              <th className="bottomBorderBlue">Date added</th>
              <th className="bottomBorderBlue">Task</th>
              <th className="bottomBorderBlue">Details</th>
              <th className="bottomBorderBlue">Priority</th>
              <th className="bottomBorderBlue">Due date</th>
              <th className="textCenter bottomBorderBlue">Done</th>
              <th className="bottomBorderBlue"></th>
              <th className="bottomBorderBlue"></th>
            </tr>
          </thead>
            <tbody>
              <AddTaskRow />
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