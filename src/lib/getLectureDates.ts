import { semesterDate } from "../data/provider"

export function getLectureDates({ day, from, to }: Lecture) {
  const date = new Date(semesterDate)
  date.setDate(semesterDate.getDate() + day)
  const startDate = new Date(date)
  const endDate = new Date(date)
  startDate.setMinutes(from)
  endDate.setMinutes(to)
  return [startDate, endDate]
}
