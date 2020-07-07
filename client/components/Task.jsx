import React from 'react'
import { connect } from 'react-redux'
import { deleteTask, updateTask } from '../actions'

import TaskReadMode from './TaskReadMode'
import TaskEditMode from './TaskEditMode'

class Task extends React.Component {
  state = {
    editMode: false,
    task: {
      id: this.props.task.id,
      date_added: this.props.task.date_added,
      task: this.props.task.task,
      details: this.props.task.details,
      priority: this.props.task.priority,
      due_date: this.props.task.due_date,
      completed: this.props.task.completed
    }
  }

  handleDelete = () => {
    this.props.dispatch(deleteTask(this.props.task.id))
  }

  handleEditClick = () => {
    if (this.state.editMode === false) {
      this.setState({
        editMode: true
      })
    } else {
      this.setState({
        editMode: false
      })
    }
  }

  handleUpdate = e => {
    this.props.dispatch(updateTask(this.state.task.id, this.state.task))
    this.setState({
      editMode: false
    })
  }

  handleChange = e => {
    if (e.target.name != "completed") {
      this.setState({
        task: {
          ...this.state.task,
          [e.target.name]: e.target.value
        }
      })
    } else {
      if (this.state.task.completed == 0) {
        this.setState({
          task: {
            ...this.state.task,
            [e.target.name]: 1
          }
        })
      } else {
        this.setState({
          task: {
            ...this.state.task,
            [e.target.name]: 0
          }
        })
      }
    }
  }

  render() {
    return (
      <>
        {!this.state.editMode && 
          <TaskReadMode
            task={this.state.task}
            handleEditClick={this.handleEditClick}
            handleDeleteClick={this.handleDelete}
          />  
        }

        {this.state.editMode &&
          <TaskEditMode
            task={this.state.task}
            handleChange={this.handleChange}
            handleUpdateClick={this.handleUpdate}
            handleDeleteClick={this.handleDelete}
          />
        }
      </>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateTask: task => dispatch(updateTask(task)),
    deleteTask: id => dispatch(deleteTask(id))
  }
}

export default connect(mapDispatchToProps)(Task)