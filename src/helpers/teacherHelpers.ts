import { TEACHERS } from '../constants/teachers'
import { Student, AttendanceRecord } from '../type'

export const getNextAvailableTeacher = (
  assignedTeacher: string,
  attendance: AttendanceRecord
): string => {
  // Find the index of the assigned teacher in the hierarchy
  const assignedTeacherIndex = TEACHERS.findIndex(
    (teacher) => teacher.name === assignedTeacher
  )

  // Start from the assigned teacher or the next teacher in the hierarchy
  const startIndex = assignedTeacherIndex === -1 ? 2 : assignedTeacherIndex

  // Check all teachers upwards in the hierarchy for availability
  for (let i = startIndex; i >= 0; i--) {
    const teacher = TEACHERS[i]
    if (attendance[teacher.name] === 'Present') {
      return teacher.name
    }
  }

  // If no teacher is found, return "Not Assigned"
  return 'Not Assigned'
}

export const updateStudentAssignments = (
  students: Student[],
  attendance: AttendanceRecord
) => {
  return students.map((student: Student) => {
    // If the student is assigned a teacher that is absent, reassign them
    if (attendance[student.assignedTeacher] === 'Absent') {
      const teacher = getNextAvailableTeacher(
        student.assignedTeacher,
        attendance
      )
      return { ...student, assignedTeacher: teacher }
    }

    // If the student is unassigned (assignedTeacher === ''), auto-assign them to the next available teacher
    if (student.assignedTeacher === '') {
      const teacher = getNextAvailableTeacher(
        student.assignedTeacher,
        attendance
      )
      return { ...student, assignedTeacher: teacher }
    }

    return student
  })
}
