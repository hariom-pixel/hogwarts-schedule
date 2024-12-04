import React from 'react'
import ScheduleToday from './pages/ScheduleToday'
import './styles/ScheduleToday.css'

const App: React.FC = () => {
  return (
    <div>
      <h1>Hogwarts Schedule Today</h1>
      <ScheduleToday />
    </div>
  )
}

export default App
