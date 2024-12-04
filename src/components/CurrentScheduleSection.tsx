import React from 'react'
import { STUDENTS } from '../constants/students'
import { getNextAvailableTeacher } from '../helpers/teacherHelpers'

interface CurrentScheduleSectionProps {
  attendance: Record<string, string>
}

const CurrentScheduleSection: React.FC<CurrentScheduleSectionProps> = ({
  attendance,
}) => {
  const updatedSchedule = STUDENTS.map((student) => {
    // If the student doesn't have an assigned teacher, assign the next available teacher
    const assignedTeacher =
      student.assignedTeacher ||
      getNextAvailableTeacher(student.assignedTeacher, attendance)

    return {
      ...student,
      assignedTeacher: assignedTeacher,
    }
  })

  return (
    <div>
      <h3>Current Schedule</h3>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Subject</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {updatedSchedule.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.subject}</td>
              <td>{student.assignedTeacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CurrentScheduleSection
