export function normalizeData(data: Data): KV<Course> {
  const normalized: KV<Course> = {}
  for (const [category, courses] of Object.entries(data)) {
    for (const [name, sections] of Object.entries(courses)) {
      const course = {} as Course
      course.name = name
      course.category = category
      course.sections = Object.entries(sections).map(
        ([id, [teacher, lectures]]): Section => {
          const section = {} as Section
          section.id = id
          section.course = course
          section.teacher = teacher
          section.lectures = lectures.map(
            ([day, from, to, location]): Lecture => ({
              day,
              from,
              to,
              location,
              course,
              section,
            })
          )
          return section
        }
      )
      normalized[course.name] = (course)
    }
  }
  return normalized
}
