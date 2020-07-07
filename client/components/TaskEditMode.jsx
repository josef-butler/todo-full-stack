import React from 'react'

// Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons'

const TaskEditMode = (props) => {
    return (
        <tr>
            <td>
              <input
                onChange={props.handleChange}
                className="u-full-width editInput"
                name="date_added"
                value={props.task.date_added}>
              </input>
            </td>
            <td>
              <input
                onChange={props.handleChange}
                className="u-full-width editInput"
                name="task"
                value={props.task.task}>
              </input>
            </td>
            <td>
              <input
                onChange={props.handleChange}
                className="u-full-width editInput"
                name="details"
                value={props.task.details}>
              </input>
            </td>
            <td>
              <select
                onChange={props.handleChange}
                className="u-full-width editInput"
                name="priority">
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
              </select>
            </td>
            <td>
              <input
                onChange={props.handleChange}
                className="u-full-width editInput"
                name="due_date"
                value={props.task.due_date}>
              </input>
            </td>
            <td
              className="textCenter">
              <input
                onChange={props.handleChange}
                name="completed"
                value={props.task.completed}
                defaultChecked={props.task.completed}
                type="checkbox"
                >
              </input>
            </td>
            <td>
              <button
                type="button"
                name="updateTaskButton"
                onClick={props.handleUpdateClick}>
                <FontAwesomeIcon icon={faSave} />
              </button>
            </td>
            <td>
              <button

                type="button"
                name="addTaskButton"
                onClick={props.handleDeleteClick}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </td>
          </tr>
    )
}

export default TaskEditMode