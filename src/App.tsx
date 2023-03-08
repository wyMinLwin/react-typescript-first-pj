import React from 'react'
import TasksContextWrapper from './context/TasksContext'
import HomeScreen from './screens/HomeScreen'
// light-blue #c2dfe3
// light-cyan #E0FBFC
// cadet-gray #9DB4C0
//payne's gray 5C6B73
// gummetal #253237

const App = () => {
  return (
    <>
    <TasksContextWrapper>
      <HomeScreen />   
    </TasksContextWrapper>
    </>
  )
}

export default App