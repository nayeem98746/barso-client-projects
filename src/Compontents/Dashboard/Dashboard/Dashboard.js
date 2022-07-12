import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import Toolbar from '@mui/material/Toolbar';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import Typography from '@mui/material/Typography';
import {
    Outlet,
    Link
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/UseAuth';
import './Dashboard.css'

const drawerWidth = 200;

function Dashboard(props) {
   

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { admin , logOut } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ background:'white' , overflow:'hidden' , paddingBottom:'350px'}}>
            <Toolbar />
            <Divider />
            
          
                <Link className='link-style' to={`/dashboard/General`}> <Button className='button-style' color="inherit"><HomeIcon></HomeIcon> General </Button></Link><br />
                <Link className='link-style' to={`/dashboard/covid`}><Button color="inherit"> <AssignmentTurnedInOutlinedIcon></AssignmentTurnedInOutlinedIcon> covid -19</Button></Link><br />
                {
                    admin && <Box><Link className='link-style' to={`/dashboard/addadmin`}><Button color="inherit"><AccountCircleOutlinedIcon /> Make Admin</Button></Link><br />
                    <Link className='link-style' to={`/dashboard/oncology`}><Button color="inherit"> <TextSnippetOutlinedIcon /> Oncology</Button></Link><br />
                    <Link className='link-style' to={`/dashboard/admincms`}><Button color="inherit"><SupervisorAccountOutlinedIcon /> Admin CMS</Button></Link><br />
                    <Link className='link-style' to={`/dashboard/diognostic`}><Button color="inherit"> <SettingsIcon /> Diognostic Testing</Button></Link><br /></Box>
                }
           <li onClick={()=> logOut()} className='dashboard-li'>
                        <LogoutIcon className='icon' />
                        <span>Logout</span>
                        </li>
        
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{background:'white'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{color:'black' , textAlign:'center'}} variant="h6" noWrap component="div">
                       Klarity Admin Portal
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
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
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Outlet></Outlet>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
