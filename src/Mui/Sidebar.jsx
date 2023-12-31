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
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Badge, Collapse, Menu, MenuItem, TableSortLabel } from '@mui/material';
import { AccountCircle, Apple, Article, Assessment, Build, Dashboard, ExpandLess, ExpandMore, Folder, Group, Home, Pages, Settings, Speed, StarBorder, TableChart } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';

import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import MoodIcon from '@mui/icons-material/Mood';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import BuildIcon from '@mui/icons-material/Build';
import { Children } from 'react';

import Basics from '../Components/Dashboard';
import Dash from '../Components/Dashboard';
import Comp from '../Components/Components';
import { useHistory } from 'react-router-dom';
import { blue, blueGrey, lightBlue, lightGreen } from '@mui/material/colors';

const drawerWidth = 240;
const primary = blue[900];

function ResponsiveDrawer(props, {Children}) {
  const history = useHistory();

    //Newly Added
    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuId = 'primary-search-account-menu';
    const isMenuOpen = Boolean(anchorEl);

    const [pageOpen, setPageOpen] = React.useState(true);

  const handlePages = () => {
    setPageOpen(!pageOpen);
  };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    
      const handleMenuClose = () => {
        setAnchorEl(null);
        //handleMobileMenuClose();
      };

      const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));
      
    
      const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={menuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
      );

      const renderMobileMenu = (
        <Menu>
              <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <p>Messages</p>
              </MenuItem>
    
              <MenuItem>
                <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <p>Notifications</p>
              </MenuItem>
              <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <p>Profile</p>
              </MenuItem>
              </Menu>
      );
      //Newly Added Ends


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box backgroundColor="#1976d2" color="white" sx={{ height: '100%' }}>
<Box sx={{ml:2, mt:1}}>
{/* Logo Added Here */}
<MoodIcon sx={{ml:10}}/>
<Typography sx={{ml:6}} backgroundColor="#1976d2" color="inherit" fontWeight={600} letterSpacing={2.5}>
  SB Admin 2
</Typography>
</Box>

      {/* <Toolbar /> */}
      <Divider color='grey' />
      <List>
        
          <ListItem disablePadding>
            <ListItemButton onClick={() => history.push("/")}>
              <ListItemIcon color="lightGreen">
                <Speed color="lightGreen" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => history.push("/components")}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Components" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => history.push("/utilities")}>
              <ListItemIcon>
                <Build />
              </ListItemIcon>
              <ListItemText primary="Utilities" />
            </ListItemButton>
          </ListItem>
        
      </List>
      <Divider />
      <List>
      <ListItem disablePadding>
            <ListItemButton onClick={handlePages}>
              <ListItemIcon>
                <Folder />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            
          


          {pageOpen ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      </ListItem>

      <Collapse in={!pageOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => history.push("/login")}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItemButton>
        </List>
      </Collapse>

          <ListItem disablePadding>
            <ListItemButton onClick={() => history.push("/tables")}>
              <ListItemIcon>
                <TableChart />
              </ListItemIcon>
              <ListItemText primary="Tables" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => history.push("/charts")}>
              <ListItemIcon>
                <Assessment />
              </ListItemIcon>
              <ListItemText primary="Charts" />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box  backgroundColor="white" sx={{ display: 'flex' }}>



      <CssBaseline />
      <AppBar
        position="fixed"
        backgroundColor="white"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >



        <Toolbar  backgroundColor="white" sx={{ display: 'flex', justifyContent: 'space-between'}}>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {/* Newly Added */}

          {/* ml - margin-left */}
          {/* m - for classes that set margin
          p - for classes that set padding
          t - for classes that set margin-top or padding-top
          b - for classes that set margin-bottom or padding-bottom
          l - for classes that set margin-left or padding-left
          r - for classes that set margin-right or padding-right
          x - for classes that set both *-left and *-right
          y - for classes that set both *-top and *-bottom */}

          <Box sx={{display: 'flex'}}>

          

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          {/* Newly Added Ends */}


        </Toolbar>
      </AppBar>

        {/* Newly Added */}
        {renderMobileMenu}
        {renderMenu}
        {/* Newly Added Ends */}

        
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
        
        <Box>

{/* <Dash />
<Comp /> */}
        </Box>
        
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;




  