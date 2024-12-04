export const updateTeacherAttendance = (
  teacherName: string,
  status: string,
  attendance: Record<string, string>
): Record<string, string> => {
  return { ...attendance, [teacherName]: status }
}
