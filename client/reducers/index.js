import { combineReducers } from 'redux'

import tasks from './tasks'
import loading from './loading'

export default combineReducers({
  tasks: tasks,
  loading: loading
})