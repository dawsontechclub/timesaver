export class Schedule {
  public lectures: Lecture[][]
  public score = 0
  constructor() {
    this.lectures = [[], [], [], [], []]
  }
  public list() {
    return this.lectures.flat()
  }
  public evaluate(...fns: ((s: Schedule) => void)[]) {
    for (const fn of fns) {
      fn(this)
    }
  }
  public copy() {
    const schedule = new Schedule()
    schedule.lectures = this.lectures.map(day => [...day])
    return schedule
  }
  public add(lectures: Lecture[]) {
    for (const lecture of lectures) {
      this.lectures[lecture.day].push(lecture)
    }
  }
  public remove(lectures: Lecture[]) {
    for (const lecture of lectures) {
      this.lectures[lecture.day] = this.lectures[lecture.day].filter(
        l => l !== lecture
      )
    }
  }
  public canAdd(lectures: Lecture[]): boolean {
    for (const lecture of lectures) {
      for (const otherLecture of this.lectures[lecture.day]) {
        if (lecture.from < otherLecture.to && lecture.to >= otherLecture.from) {
          return false
        }
      }
    }
    return true
  }
  public tryAdd(lectures: Lecture[]): boolean {
    if (this.canAdd(lectures)) {
      this.add(lectures)
      return true
    }
    return false
  }
  public tryFork(lectures: Lecture[], fn: (s: Schedule) => void) {
    if (this.tryAdd(lectures)) {
      fn(this)
      this.remove(lectures)
    }
  }
}
