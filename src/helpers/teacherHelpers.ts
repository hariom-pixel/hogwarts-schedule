import { TEACHERS } from '../constants/teachers'
import { Student, AttendanceRecord } from '../type'

const getNextAvailableTeacher = (
  assignedTeacher: string,
  attendance: Record<string, string>
): string => {
  // If the student is unassigned, start from the standby teacher (Rubeus Hagrid)
  if (assignedTeacher === '') {
    for (let i = 2; i >= 0; i--) {
      const teacher = TEACHERS[i]
      if (attendance[teacher.name] === 'Present') {
        return teacher.name
      }
    }
    return 'Not Assigned' // No teacher available in the hierarchy
  }

  // If the assigned teacher is Horace or Severus and absent, prioritize Rubeus Hagrid
  if (
    (assignedTeacher === 'Horace Slughorn' ||
      assignedTeacher === 'Severus Snape') &&
    attendance[assignedTeacher] === 'Absent'
  ) {
    if (attendance['Rubeus Hagrid'] === 'Present') {
      return 'Rubeus Hagrid'
    }
  }

  // Start searching upwards in the hierarchy for an available teacher
  const assignedTeacherIndex = TEACHERS.findIndex(
    (teacher) => teacher.name === assignedTeacher
  )

  for (let i = assignedTeacherIndex; i >= 0; i--) {
    const teacher = TEACHERS[i]
    if (attendance[teacher.name] === 'Present') {
      return teacher.name
    }
  }

  return 'Not Assigned' // No teacher available in the hierarchy
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
