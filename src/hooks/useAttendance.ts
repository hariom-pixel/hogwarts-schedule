import { useState } from 'react'
import { TEACHER_ATTENDANCE } from '../constants/teachers'
import { AttendanceRecord } from '../type'

export const useAttendance = () => {
  const [attendance, setAttendance] =
    useState<AttendanceRecord>(TEACHER_ATTENDANCE)

  const updateAttendance = (teacherName: string, status: string) => {
    setAttendance((prev) => ({
      ...prev,
      [teacherName]: status,
    }))
  }

  return { attendance, updateAttendance }
}
