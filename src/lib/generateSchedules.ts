import { Schedule } from "./Schedule"
import { shorterDays } from "./shorterDays"

function fillSchedules(
  courses: Course[],
  schedules: Schedule[],
  draft: Schedule = new Schedule()
) {
  if (courses.length === 0) {
    schedules.push(draft.copy())
    return
  }
  for (const section of courses.pop().sections) {
    draft.tryFork(section.lectures, () =>
      fillSchedules([...courses], schedules, draft)
    )
  }
}

export function generateSchedules(courses: Course[]) {
  if (courses.length === 0) return []
  const schedules: Schedule[] = []
  fillSchedules(
    [...courses].sort((a, b) => a.sections.length - b.sections.length),
    schedules
  )
  for (const schedule of schedules) {
    schedule.evaluate(shorterDays)
  }
  schedules.sort((a,b) => b.score - a.score)
  return schedules
}
