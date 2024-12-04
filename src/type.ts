// Interface for a Teacher
export interface Teacher {
  name: string // Name of the teacher
  hierarchyLevel: number // Hierarchy level (e.g., Headmaster = 0, Headmistress = 1, etc.)
}

// Interface for a Student
export interface Student {
  name: string // Name of the student
  subject: string // Subject being studied
  assignedTeacher: string // Assigned teacher's name
}

// Type for Teacher Attendance
export type AttendanceRecord = Record<string, string>
