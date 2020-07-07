import React from 'react'
import { connect } from 'react-redux'
import { deleteTask, updateTask } from '../actions'

// Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons'

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
        {/* Read only mode */}
        {!this.state.editMode &&
          <tr>
            <td>{this.state.task.date_added}</td>
            <td>{this.state.task.task}</td>
            <td>{this.state.task.details}</td>
            <td>{this.state.task.priority}</td>
            <td>{this.state.task.due_date}</td>
            <td className="textCenter">{
              this.state.task.completed == 1
                ? <FontAwesomeIcon icon={faCheck} />
                : <></>
            }</td>
            <td>
              <button onClick={this.handleEditClick} className="button" type="button" name="edit">
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </td>
            <td>
              <button className="button" onClick={this.handleDelete} type="button" name="delete">
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </td>
          </tr>
        }

        {/* Edit mode */}
        {this.state.editMode &&
          <tr>
            <td>
              <input
                onChange={this.handleChange}
                className="u-full-width editInput"
                name="date_added"
                value={this.state.task.date_added}
                placeholder={`${this.state.task.date_added}`}>
              </input>
            </td>
            <td>
              <input
                onChange={this.handleChange}
                className="u-full-width editInput"
                name="task"
                value={this.state.task.task}
                placeholder={`${this.state.task.task}`}>
              </input>
            </td>
            <td>
              <input
                onChange={this.handleChange}
                className="u-full-width editInput"
                name="details"
                value={this.state.task.details}
                placeholder={`${this.state.task.details}`}>
              </input>
            </td>
            <td>
              <select
                onChange={this.handleChange}
                className="u-full-width editInput"
                name="priority">
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
              </select>
            </td>
            <td>
              <input
                onChange={this.handleChange}
                className="u-full-width editInput"
                name="due_date"
                value={this.state.task.due_date}
                placeholder={`${this.state.task.value}`}>
              </input>
            </td>
            <td
              className="textCenter">
              <input
                onChange={this.handleChange}
                name="completed"
                value={this.state.task.completed}
                defaultChecked={this.state.task.completed}
                type="checkbox"
                >
              </input>
            </td>
            <td>
              <button
                className="button"
                type="button"
                name="updateTaskButton"
                onClick={this.handleUpdate}>
                <FontAwesomeIcon icon={faSave} />
              </button>
            </td>
            <td>
              <button
                className="button"
                type="button"
                name="addTaskButton"
                onClick={this.handleDelete}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </td>
          </tr>
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