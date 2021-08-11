import { ViewState } from "@devexpress/dx-react-scheduler"
import {
  Appointments,
  AppointmentTooltip,
  Scheduler,
  WeekView,
} from "@devexpress/dx-react-scheduler-material-ui"
import React, { SyntheticEvent } from "react"
import { useState } from "react"
import { semesterDate } from "../data/provider"
import { lectureToAppointmentModel } from "../lib/lectureToAppointmentModel"
import { Schedule } from "../lib/Schedule"



export default function Calendar({ schedule }: { schedule: Schedule }) {

  function TimeTableCell(props) {
    const [style, setStyle] = useState({})
    return <WeekView.TimeTableCell  {...props} onDoubleClick={(event: SyntheticEvent) => {
      console.log(props)  
    }}/>;
  };

  return (
    <Scheduler data={schedule.list().map(lectureToAppointmentModel)}>
      <ViewState currentDate={semesterDate} />
      <WeekView
        timeTableCellComponent={TimeTableCell}
        startDayHour={8}
        endDayHour={20}
        excludedDays={[0, 6]}
        cellDuration={60}
      ></WeekView>
      <Appointments />
      <AppointmentTooltip></AppointmentTooltip>
    </Scheduler>
  )
}
