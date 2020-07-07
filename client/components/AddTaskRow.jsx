import React from 'react'

// Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

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
    this.setState({
      date_added: this.setTodaysDate()
    })
  }

  setTodaysDate = () => {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth()
    let yyyy = today.getFullYear()
    if (dd < 10 ) { dd = '0' + dd }
    if (mm < 10 ) { mm = '0' + mm }
    return `${yyyy}-${mm}-${dd}`
  }

  handleAdd = e => {

  }

  handleChange = e => {
    this.setState({
      task: {
        ...this.state.task,
        [e.target.name]: e.target.value
      }
    }, console.log(this.state)
  }

  render() {
    return (
      <tr>
        <td><input name="date_added" className="u-full-width editInput" placeholder={`${this.state.date_added}`}></input></td>
        <td><input name="task" className="u-full-width editInput"></input></td>
        <td><input name="details" className="u-full-width editInput"></input></td>
        <td><select name="priority" className="u-full-width editInput">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select></td>
        <td><input name="due_date" className="u-full-width editInput"></input></td>
        <td className="textCenter">
          <input name="completed" type="checkbox"></input>
        </td>
        <td></td>
        <td>
          <button className="button" type="button" name="addTaskButton" onClick={this.addTaskButtonClicked}>
            <FontAwesomeIcon icon={faSave} />
          </button>
        </td>
      </tr>
    )
  }
}

export default AddTaskRow