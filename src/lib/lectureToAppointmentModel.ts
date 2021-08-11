import { AppointmentModel } from "@devexpress/dx-react-scheduler"
import { getLectureDates } from "./getLectureDates"


export function lectureToAppointmentModel(lecture: Lecture): AppointmentModel {
  const [startDate, endDate] = getLectureDates(lecture)
  return {
    title: `${lecture.section.course.name}#${lecture.section.id}`,
    startDate,
    endDate,
  }
}
