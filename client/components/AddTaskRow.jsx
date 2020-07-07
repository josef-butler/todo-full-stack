import React from 'react'
import { connect } from 'react-redux'
import { saveTask } from '../actions'

// Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class AddTaskRow extends React.Component {
  state = {
    task: {
      date_added: null,
      task: '',
      details: '',
      priority: "High",
      due_date: '',
      completed: false
    }
  }

  componentDidMount() {
    const todaysDate = this.getTodaysDate()
    this.setState({
      task: {
        ...this.state.task,
        date_added: todaysDate
      }
    })
  }

  getTodaysDate = () => {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth()
    let yyyy = today.getFullYear()
    if (dd < 10 ) { dd = '0' + dd }
    if (mm < 10 ) { mm = '0' + mm }
    return `${yyyy}-${mm}-${dd}`
  }

  handleAdd = e => {
    this.props.dispatch(saveTask(this.state.task))
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
      if (this.state.task.completed === false) {
        this.setState({
          task: {
            ...this.state.task,
           [e.target.name]: true
          }
        })
      } else {
        this.setState({
          task: {
            ...this.state.task,
            [e.target.name]: false
          }
        })
      }
    }
  }

  render() {
    return (
      <tr>
        <td className="bottomBorderBlue"><input onChange={this.handleChange} name="date_added" className="u-full-width editInput" value={`${this.state.task.date_added}`}></input></td>
        <td className="bottomBorderBlue"><input onChange={this.handleChange} name="task" className="u-full-width editInput"></input></td>
        <td className="bottomBorderBlue"><input onChange={this.handleChange} name="details" className="u-full-width editInput"></input></td>
        <td className="bottomBorderBlue"><select onChange={this.handleChange} name="priority" className="u-full-width editInput">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select></td>
        <td className="bottomBorderBlue"><input onChange={this.handleChange} name="due_date" className="u-full-width editInput"></input></td>
        <td className="bottomBorderBlue textCenter">
          <input onChange={this.handleChange} name="completed" type="checkbox"></input>
        </td>
        <td className="bottomBorderBlue">
        </td>
        <td className="bottomBorderBlue">
          <button className="button button-primary" type="button" name="addTaskButton" onClick={this.handleAdd}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </td>
      </tr>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveTask: task => dispatch(saveTask(task))
  }
}

export default connect(mapDispatchToProps)(AddTaskRow)