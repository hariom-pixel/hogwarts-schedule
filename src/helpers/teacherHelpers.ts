import { TEACHERS } from '../constants/teachers'

export const getNextAvailableTeacher = (
  assignedTeacher: string,
  attendance: Record<string, string>
): string => {
  if (assignedTeacher === '') {
    // If no teacher is assigned, start from Rubeus Hagrid (index 2) to find the first available teacher
    for (let i = 2; i < TEACHERS.length; i++) {
      const teacher = TEACHERS[i]
      if (attendance[teacher.name] === 'Present') {
        return teacher.name
      }
    }
  }

  // If there's an assigned teacher, check their availability
  const assignedTeacherIndex = TEACHERS.findIndex(
    (teacher) => teacher.name === assignedTeacher
  )
  for (let i = assignedTeacherIndex; i >= 0; i--) {
    const teacher = TEACHERS[i]
    if (attendance[teacher.name] === 'Present') {
      return teacher.name
    }
  }

  return 'Not Assigned' // If no teacher is found
}

export const updateStudentAssignments = (students: any, attendance: any) => {
  return students.map((student: any) => {
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
