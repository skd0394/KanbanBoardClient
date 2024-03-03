import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin, logOut } from "../Redux/action";

const pages = [
  { name: "Board", path: "board" },
  { name: "Home", path: "/dashboard" },
  { name: "Profile", path: "/profile" },
];
const settings = [
  { name: "Login", path: "/" },
  { name: "Logout", path: "/logout" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const [activeTab, setActiveTab] = React.useState("Home");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setActiveTab(e.target.value);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    dispatch(logOut());
    window.open("http://localhost:6005/logout", "_self");
  };

  // React.useEffect(() => {
  //   setUserData(user);
  // }, []);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {user && user.avatar ? (
            <Avatar
              src={user.avatar}
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          ) : (
            <Avatar
              src={"/broken-image.jpg"}
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          )}

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {user ? user.name : "loco"}
          </Typography>

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
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <NavLink to={page.path}>
                  <MenuItem
                    dense={true}
                    key={page}
                    onClick={handleCloseNavMenu}
                  >
                    <Button textAlign="center">{page.name}</Button>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {user ? user.name : "logo"}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink to={page.path}>
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  variant={activeTab === page.name ? "contained" : "outlined"}
                >
                  {page.name}
                </Button>
              </NavLink>
            ))}
          </Box>
          {isAuthenticated ? (
            <NavLink to={settings[1].path}>
              <MenuItem key={settings[1].path} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{settings[1].name}</Typography>
              </MenuItem>
            </NavLink>
          ) : (
            <></>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
