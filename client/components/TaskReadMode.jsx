import React from 'react'

// Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const TaskReadMode = (props) => {
    return (
        <tr>
            <td>{props.task.date_added}</td>
            <td>{props.task.task}</td>
            <td>{props.task.details}</td>
            <td>{props.task.priority}</td>
            <td>{props.task.due_date}</td>
            <td className="textCenter">{
                props.task.completed == 1
                    ? <FontAwesomeIcon icon={faCheck} />
                    : <></>
                }
            </td>
            <td>
                <button onClick={props.handleEditClick} type="button" name="edit">
                    <FontAwesomeIcon icon={faEdit} />
                </button>
            </td>
            <td>
                <button onClick={props.handleDeleteClick} type="button" name="delete">
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </td>
        </tr>
    )
}

export default TaskReadMode