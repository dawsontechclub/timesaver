const data = {}

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

function toMin(h, m, k) {
  h = +h % 12
  if (k === "P") h += 12
  return h * 60 + +m
}

const handlers = {
  Section: (s, { textContent }) => (s.id = textContent),
  Teacher: (s, { textContent }) => (s.teacher = textContent),
  Teachers: (s, { textContent }) => (s.teacher = textContent),
  // "Course Drop Date": (s, { textContent }) => (s.d = textContent),
  Comment: (s, { textContent }) => (s.reserved = textContent === "On Reserve"),
  /**
   * @param {HTMLElement} el
   */
  Schedule: (s, el) => {
    s.lectures = [...el.querySelectorAll("tr")].map(tr => {
      const [day, time, location, kind, irregular, ...other] = [
        ...tr.querySelectorAll("td"),
      ].map(td => td.textContent)
      if (irregular) {
        s.irregular = true
        return { data: [day, time, location, kind, irregular, ...other] }
      }
      const [_, fh, fm, fk, th, tm, tk] = time.match(
        /(\d+):(\d+) (\w)M - (\d+):(\d+) (\w)M/
      )
      return [
        daysOfWeek.indexOf(day),
        toMin(fh, fm, fk),
        toMin(th, tm, tk),
        location,
      ]
    })
  },
}

for (const courseList of document.querySelectorAll("div.course-list-table")) {
  let categoryEl = courseList.previousSibling
  while (categoryEl.tagName !== "H2") categoryEl = categoryEl.previousSibling
  const courses = {}
  for (const courseWrapElement of courseList.querySelectorAll(".course-wrap")) {
    const id = courseWrapElement.querySelector(".cnumber").textContent
    const title = courseWrapElement.querySelector(".ctitle").textContent
    const sections = {}
    courseWrapElement
      .querySelectorAll(".section-details")
      .forEach(sectionElement => {
        const section = {}
        sectionElement.querySelectorAll("li.row").forEach(li => {
          const field = li.querySelector("label").textContent
          const div = li.querySelector("div")
          if (field in handlers) handlers[field](section, div)
        })
        if (!section.reserved && !section.irregular) sections[section.id] = [section.teacher, section.lectures]
      })
    courses[id + " " + title] = sections
  }
  data[categoryEl.textContent] = courses
}
console.log(JSON.stringify(data))
