import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logo1.svg'
import logoMain from '../../assets/logo.svg'
import { TbEdit } from "react-icons/tb";
import BasicQuestions from '../basicquestions/BasicQuestions';


const drawerWidth = 208;

function BotSpace(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  

  const drawer = (
    <div className='d-flex flex-column justify-content-start align-items-center w-100 gap-3'>
      <div className='d-flex justify-content-between align-items-center w-100' style={{height: '47px', backgroundColor: "#D7C7F4"}}>
        <img src={logo} alt="Logo" />
        <Typography sx={{fontSize: "20px"}}>New Chat</Typography>
        <TbEdit  className='editBtn'/>
      </div>
      <div className='d-flex justify-content-center align-items-center pastCon' style={{ height: "39px", borderRadius: "8px"}}>
      <Typography sx={{fontSize: "16px", fontWeight: "bold"}}>Past Conversations</Typography>
      </div>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="bgColor" sx={{ display: 'flex', height: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: "47px",
          backgroundColor: "transparent",
          boxShadow: "0"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{fontSize: "28px", fontWeight: "bolder", color: "#9785BA"}} noWrap component="div">
            Bot AI
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, display: "flex", justifyContent: "space-between", flexDirection: "column", alignItems: "center" }}
      >
        <Toolbar />
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <Typography sx={{fontSize: "28px", fontWeight: "bold"}}>
          How Can I Help You Today?
          </Typography>
          <img src={logoMain} alt="logo" />
        </div>
        <BasicQuestions />
      </Box>
    </Box>
  );
}


export default BotSpace;
