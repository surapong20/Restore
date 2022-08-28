import { Box, AppBar, Toolbar, IconButton, Typography, Button, Switch, colors } from '@mui/material'


export default function Header(props : any) {
  return (
    <div>return (
        <Box sx={{ flexGrow: 1,mb :10 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                 <Switch  defaultChecked onChange={props.handleMode} color="warning"/>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                K.U.Y              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );</div>
  )
}
