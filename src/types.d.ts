declare type KV<T> = { [k: string]: T }

declare interface Course {
  name: string
  sections: Section[]
  category: string
}

declare interface Section {
  course: Course
  id: string
  teacher: string
  lectures: Lecture[]
  cdd?: string
  comment?: string
  irregular?: boolean
}

declare interface Lecture {
  section: Section
  course: Course
  data?: string[]
  day: number
  from: number
  to: number
  location: string
  kind?: string
}

/**
 * day, fromMin, toMin, location
 */
declare type LectureData = [number, number, number, string]

/**
 * teacher, lectures
 */
declare type SectionData = [string, LectureData[]]

declare type CourseData = KV<SectionData>

declare type Data = KV<KV<CourseData>>