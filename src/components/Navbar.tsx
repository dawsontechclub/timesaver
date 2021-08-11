import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core"
import React from "react"
// @ts-ignore
import icon from "../images/icon.png"

export function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Avatar src={icon}></Avatar>
        <Typography variant="button" color="textSecondary">Dawson Tech Club Timesaver</Typography>
      </Toolbar>
    </AppBar>
  )
}
