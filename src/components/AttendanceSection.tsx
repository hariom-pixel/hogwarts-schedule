import React from 'react'
import { TEACHERS } from '../constants/teachers'

interface AttendanceSectionProps {
  updateAttendance: (teacherName: string, status: string) => void
}

const AttendanceSection: React.FC<AttendanceSectionProps> = ({
  updateAttendance,
}) => {
  return (
    <div>
      <h3>Attendance</h3>
      <table>
        <thead>
          <tr>
            <th>Teacher</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {TEACHERS.map((teacher) => (
            <tr key={teacher.name}>
              <td>{teacher.name}</td>
              <td>
                <select
                  onChange={(e) =>
                    updateAttendance(teacher.name, e.target.value)
                  }
                  defaultValue='Present'
                >
                  <option value='Present'>Present</option>
                  <option value='Absent'>Absent</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AttendanceSection
