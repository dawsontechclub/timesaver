import { Checkbox } from "@material-ui/core"
import Chip from "@material-ui/core/Chip"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import React from "react"
import {courses} from "../data/provider"

export function CourseSelect(props: {onChange: (_: any, c: (Course|string)[]) => void, selected: Course[]}) {
  const {onChange, selected} = props
  return (
    <Autocomplete
      
      multiple
      value={selected}
      options={Object.values(courses)}
      groupBy={(option) => option.category}
      onChange={onChange}
      getOptionLabel={option => option.name}
      disableCloseOnSelect
      renderTags={(tag, getTagProps) =>
        tag.map((option, index) => (
          <Chip
            label={option.name}
            {...getTagProps({ index })}
          />
        ))
      }
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </React.Fragment>
      )}
      renderInput={params => (
        <TextField {...params} label="Courses" variant="outlined" />
      )}
    />
  )
}
