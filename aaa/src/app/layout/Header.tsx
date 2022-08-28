import { Box, AppBar, Toolbar, IconButton, Typography, Button, Switch, colors, Badge, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { NavLink } from 'react-router-dom';


const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];
 
const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};



export default function Header(props : any) {
  return (
    <div>return (
        <Box sx={{ flexGrow: 1,mb :10 }}>
          <AppBar position="static">

            <Toolbar sx={{direction:"row",justifyContent:"space-between",alignItems:"center"}}> 

                <Box sx={{display:'flex',alignItems:"center"}} > 
                 <Switch  defaultChecked onChange={props.handleMode} color="warning"/>
                <Typography variant="h6" component="div" >
                  K.U.Y              
                </Typography>
                </Box>

                
                <List sx= {{display:"flex",alignItems:"center"}}>
                  {midLinks.map(({title,path}) => (
                  <ListItem component={NavLink} to={path} sx={navStyles}> {title} </ListItem>))}
                 </List>
                

              <Box sx= {{display:"flex",alignItems:"center"}}>
              <IconButton aria-label="cart" size='large' color='inherit'>
                <Badge color="secondary" badgeContent={1}>
                  <ShoppingCartIcon />
                </Badge>
             </IconButton>

               <List sx= {{display:"flex",alignItems:"center"}}>
                  {rightLinks.map(({title,path}) => (
                  <ListItem component={NavLink} to={path} sx={navStyles}> {title} </ListItem>))}
                 </List>
              </Box>

            </Toolbar>
          </AppBar>
        </Box>
      );</div>
  )
}
