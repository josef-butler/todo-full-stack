import React from 'react'
import { connect } from 'react-redux'
import { deleteTask } from '../actions'

// Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class Task extends React.Component {
  handleDelete = () => {
    this.props.dispatch(deleteTask(this.props.task.id))
  }

  render() {
    return (
      <tr>
        <td>{this.props.task.date_added}</td>
        <td>{this.props.task.task}</td>
        <td>{this.props.task.details}</td>
        <td>{this.props.task.priority}</td>
        <td>{this.props.task.due_date}</td>
        <td className="textCenter">{
          this.props.task.completed == 1
            ? <FontAwesomeIcon icon={faCheck} />
            : <></>
        }
        </td>
        <td><FontAwesomeIcon icon={faEdit} /></td>
        <td>
          <button onClick={this.handleDelete} type="button" name="delete">
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </td>
      </tr>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteTask: id => dispatch(deleteTask(id))
  }
}

export default connect(mapDispatchToProps)(Task)