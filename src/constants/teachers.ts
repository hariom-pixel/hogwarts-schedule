import { Teacher, AttendanceRecord } from '../type'

export const TEACHERS: Teacher[] = [
  { name: 'Professor Dumbledore', hierarchyLevel: 0 },
  { name: 'Minerva McGonagall', hierarchyLevel: 1 },
  { name: 'Rubeus Hagrid', hierarchyLevel: 2 },
  { name: 'Horace Slughorn', hierarchyLevel: 3 },
  { name: 'Severus Snape', hierarchyLevel: 4 },
]

export const TEACHER_ATTENDANCE: AttendanceRecord = {
  'Professor Dumbledore': 'Present',
  'Minerva McGonagall': 'Present',
  'Rubeus Hagrid': 'Present',
  'Horace Slughorn': 'Present',
  'Severus Snape': 'Present',
}
