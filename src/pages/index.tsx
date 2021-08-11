import { Container } from "@material-ui/core"
import React from "react"
import { useEffect, useState } from "react"
import Calendar from "../components/Calendar"
import { CourseSelect } from "../components/CourseSelect"
import { Navbar } from "../components/Navbar"
import { generateSchedules } from "../lib/generateSchedules"

export default () => {
  const [selected, setSelected] = useState<Course[]>([])

  const schedules = generateSchedules(selected)
  schedules.length = 10


  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="lg">
        <CourseSelect
          selected={selected}
          onChange={(_, selected) => {
            setSelected(selected as Course[])
          }}
        ></CourseSelect>
        {schedules.map((schedule, i) => {
          return <Calendar schedule={schedule} key={i}></Calendar>
        })}
      </Container>
    </>
  )
}
