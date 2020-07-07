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
  state = {
    addTaskButtonClicked: false
  }

  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }

  addTaskButtonClicked = (e) => {
    if (this.state.addTaskButtonClicked === false) {
      this.setState({
        addTaskButtonClicked: true
      })
    } else {
      this.setState({
        addTaskButtonClicked: false
      })
    }
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
              <th>Done</th>
              <th></th>
              <th>
                <button className="button button-primary" type="button" name="addTaskButton" onClick={this.addTaskButtonClicked}>
                  {!this.state.addTaskButtonClicked
                  ? <FontAwesomeIcon icon={faPlus} />
                  : <FontAwesomeIcon icon={faMinus} />
                  }
                </button>
              </th>
            </tr>
          </thead>
            <tbody>
              {this.state.addTaskButtonClicked && <AddTaskRow />}
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