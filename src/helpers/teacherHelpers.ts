import { TEACHERS } from '../constants/teachers'

export const getNextAvailableTeacher = (
  assignedTeacher: string,
  attendance: Record<string, string>
): string => {
  // Find the index of the assigned teacher in the hierarchy
  const teacherIndex = TEACHERS.findIndex(
    (teacher) => teacher.name === assignedTeacher
  )

  // If no teacher is assigned, start from the "lowest" hierarchy teacher (index 2, i.e., Rubeus Hagrid)
  const startIndex = teacherIndex === -1 ? TEACHERS.length - 1 : teacherIndex

  // Loop upward (higher in hierarchy)
  for (let i = startIndex; i >= 0; i--) {
    const teacher = TEACHERS[i]
    // Return the first teacher who is Present
    if (attendance[teacher.name] === 'Present') {
      return teacher.name
    }
  }

  // If no teacher is available, return "Not Assigned"
  return 'Not Assigned'
}
