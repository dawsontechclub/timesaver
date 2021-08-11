import { normalizeData } from "../lib/normalizeData"
import _jsonCourses from "./courses.json"

// month parameter is an index
export const semesterDate = new Date(2021, 7, 23)
export const jsonCourses = _jsonCourses
export const courses = normalizeData(_jsonCourses as any)
// export const courses = normalizeData({
//     _: {
//         "603-101-MQ I.C.E.": _jsonCourses.English["603-101-MQ I.C.E."],
//         "345-101-MQ Knowledge": _jsonCourses.Humanities["345-101-MQ Knowledge"],
//         "602-102-MQ French Language and Culture": _jsonCourses.French["602-102-MQ French Language and Culture"],
//         "243-101-DW Introduction to the Occupation": _jsonCourses["Electronics Engineering Technology"]["243-101-DW Introduction to the Occupation"],
//         "243-111-DW Combinational Circuits": _jsonCourses["Electronics Engineering Technology"]["243-111-DW Combinational Circuits"],
//         "243-114-DW Direct Current Circuits": _jsonCourses["Electronics Engineering Technology"]["243-114-DW Direct Current Circuits"],
//         "201-943-DW Applied Mathematics": _jsonCourses.Mathematics["201-943-DW Applied Mathematics"]
//     }
// } as any)
