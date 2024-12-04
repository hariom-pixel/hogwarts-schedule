import React from 'react'
import { STUDENTS } from '../constants/students'
import { updateStudentAssignments } from '../helpers/teacherHelpers'

interface CurrentScheduleSectionProps {
  attendance: Record<string, string>
}

const CurrentScheduleSection: React.FC<CurrentScheduleSectionProps> = ({
  attendance,
}) => {
  const updatedSchedule = updateStudentAssignments(STUDENTS, attendance)

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
          {updatedSchedule.map((student: any, index: any) => (
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
