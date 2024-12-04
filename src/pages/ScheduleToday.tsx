import React from 'react'
import AttendanceSection from '../components/AttendanceSection'
import CurrentScheduleSection from '../components/CurrentScheduleSection'
import { useAttendance } from '../hooks/useAttendance'

const ScheduleToday: React.FC = () => {
  const { attendance, updateAttendance } = useAttendance()

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <AttendanceSection updateAttendance={updateAttendance} />
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <CurrentScheduleSection attendance={attendance} />
      </div>
    </div>
  )
}

export default ScheduleToday
