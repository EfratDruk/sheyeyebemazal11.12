// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../store';
// import { Link, useNavigate } from 'react-router-dom';
// import { logout } from '../redux/features/userSlice';

// const ResponsiveAppBar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const userGender = useSelector((state: RootState) => state.user.user?.gender);

//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//     // const handleLogout = () => {
//   //   dispatch(logout(navigate));
//   //   // navigate('/login'); // ניווט לאחר התנתקות
//   //   handleCloseUserMenu();
//   // };

//   const handleLogout = () => {
//     const confirmLogout = window.confirm("Are you sure you want to log out?");
//     if (confirmLogout) {
//       dispatch(logout());
//       navigate('/'); // נווט לעמוד הבית
//       handleCloseUserMenu();
//     }
//   };

//   // רשימת הכפתורים לפי סוג המשתמש
//   const pages = userGender === 'MAN'
//     ? ['Tips', 'My Requests', 'Add Requests']
//     : userGender === 'WOMAN'
//     ? ['Jobs', 'My Profile']
//     : ['Home', 'Login', 'Sign Up'];

//   const settings = userGender ? ['Profile', 'Logout'] : [];

//   return (
//     <AppBar position="fixed" sx={{ width: '100%' }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             <img src='../img/שיהיה במזל.png' alt='logo'></img>
//           </Typography>

//           {/* תפריט עבור מסכים קטנים */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//               keepMounted
//               transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: 'block', md: 'none' } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Link to={`/${page.toLowerCase().replace(/\s+/g, '')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                     {page}
//                   </Link>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           {/* תפריט עבור מסכים גדולים */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 <Link to={`/${page.toLowerCase().replace(/\s+/g, '')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                   {page}
//                 </Link>
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             {userGender && (
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
//                 </IconButton>
//               </Tooltip>
//             )}
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//               keepMounted
//               transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem
//                   key={setting}
//                   onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}
//                 >
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default ResponsiveAppBar;

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { logout } from "../redux/features/userSlice";

const ResponsiveAppBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  // const userGender = useSelector((state: RootState) => state.user.user?.gender);
  const user = JSON.parse(localStorage.getItem("user"));

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      dispatch(logout());
      navigate("/"); // Navigate to the homepage
      handleCloseUserMenu();
    }
  };

  // Define the pages and their corresponding paths
  let pages = [{ name: "Home", path: "/" }];
  if (!user) {
    pages = [...pages, { name: "Login", path: "/SignIn" }];
    pages = [...pages, { name: "Sign Up", path: "/SignUp" }];
  }
  // Add gender-specific pages dynamically
  let genderSpecificPages = [];
  if (user) {
    switch (user.gender) {
      case "MAN":
        genderSpecificPages = [
          { name: "רשימת בחורות", path: "/WomanList" },
          { name: "ההצעות שלי", path: "/AdjustmentList" },
        ];
        break;
      case "WOMAN":
        genderSpecificPages = [
          { name: "רשימת בחורים", path: "/ManList" },
          { name: "ההצעות שלי", path: "/AdjustmentList" },
        ];
        break;
      default:
        genderSpecificPages = [
          { name: "רשימת בחורים", path: "/ManList" },
          { name: "רשימת בחורות", path: "/WomanList" },
          { name: "הצעות", path: "/AdjustmentList" },
        ];
        break;
    }
  }
  // const settings = user ? [
  //   'profile'
  // //  = { name: 'Profile', path: '/ShowWoman' }
  //   , 'Logout'] : [];
  const handleProfileClick = () => {
    console.log("prifile", user);
    
      if (user) {
        if (user.gender === "WOMAN") {
          navigate("/ShowWoman", {
            state: { womanId: user.id },
          });
        } else {
          navigate("/ShowMan", {
            state: { manId: user.id },
          });
        }
      }
  };

const settings = user
    ? [
        { name: "Profile", path: handleProfileClick },
        // אם אישה – לשם, אם גבר – לשם
        { name: "Logout", path: handleLogout }, // התנתקות
      ]
    : [];


return (
    <AppBar position="sticky" color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          {/* Logo */}
          <img
            src="../img/logo.png"
            alt="Logo"
            style={{ width: "auto", height: "50px" }}
          />

          {/* Title */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            שיהיה במזל
          </Typography>

          {/* Mobile menu for smaller screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {[...pages, ...genderSpecificPages].map(({ name, path }) => (
                <MenuItem key={name} onClick={handleCloseNavMenu}>
                  <Link
                    to={path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop menu for larger screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {[...pages, ...genderSpecificPages].map(({ name, path }) => (
              <Button
                key={name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  to={path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {name}
                </Link>
              </Button>
            ))}
          </Box>

          {/* User menu */}
          <Box sx={{ flexGrow: 0 }}>
            {user && (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}
                > */}
              {settings.map(({ name, path }) => (
                <MenuItem
                  key={name}
                    onClick={path}   
                >
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
