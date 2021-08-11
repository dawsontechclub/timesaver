import { Schedule } from "./Schedule";

export function shorterDays(schedule: Schedule) {
    for (const day of schedule.lectures) {
        let minFrom = 0
        let maxTo = 0
        for (const lecture of day) {
            minFrom = Math.min(minFrom, lecture.from)
            maxTo = Math.max(maxTo, lecture.to)
        }
        schedule.score -= maxTo - minFrom
    }
}