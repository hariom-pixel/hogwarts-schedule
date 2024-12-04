import { useState } from 'react'
import { TEACHER_ATTENDANCE } from '../constants/teachers'

export const useAttendance = () => {
  const [attendance, setAttendance] =
    useState<Record<string, string>>(TEACHER_ATTENDANCE)

  const updateAttendance = (teacherName: string, status: string) => {
    setAttendance((prev) => ({
      ...prev,
      [teacherName]: status,
    }))
  }

  return { attendance, updateAttendance }
}
