import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../actions'

import TaskTable from './TaskTable'

class App extends React.Component {
  state = {
    loading: false
  }

  componentDidMount = () => {
    this.props.dispatch(fetchTasks())
  }

  render() {
    return (
      <>
      <h1>To do</h1>
      <TaskTable />
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    tasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(App)