import {React,useState} from 'react';
import { 
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
const toggleItems = ["Fork", "Like","Github"];

function ToggleCompo() {
    const [openDrawer, setOpenDrawer] = useState(false);
    
  return (
    <>
    <Drawer open={openDrawer}
     onClose={()=>setOpenDrawer(false)}
     anchor='right'>
                <List>
                  {toggleItems.map((items, index) => (
                      <ListItemButton key={index}>
                          <ListItemIcon sx={{ color: '#bf00ff' }}>
                              {index % 2 === 0 ? <GitHubIcon /> : <FavoriteBorderIcon />}
                          </ListItemIcon>
                          <ListItemText>{items}</ListItemText>
                      </ListItemButton>
                  ))}
                </List>
             </Drawer>
             <IconButton 
            sx={{ color: "white", marginLeft: "auto" }}
             onClick={()=>setOpenDrawer(!openDrawer)}>
                <MenuIcon>
                </MenuIcon>
             </IconButton>
      </>
  )
}

export default ToggleCompo;