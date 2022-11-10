/* eslint-disable no-console */
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
import Logo from "../../images/logo.jpg";
import axios from "axios";
import LatestNews from "./Latest";
import Category from "./Category";
import Sources from "./Sources";
import { useAuth0 } from "@auth0/auth0-react";

const pages = ["Latest News", "Categories", "Sources"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const latest = () => {
    // console.log("latest");
    const API_KEY = "4021f8f086174735b3c487d29e7644ac";
    let NEWS_API_URL =
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4021f8f086174735b3c487d29e7644ac";

    axios.get(NEWS_API_URL).then((res) => {
      props.setNewsArticles(res.data.articles);
      console.log(res);
      // setNewsArticles(res);
    });
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* <Logo/> */}
          <img className="logo" src={Logo}></img>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
            AI-NEWS
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
                <MenuItem key={page} onClick={() => latest(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {/* <MenuItem key={pages[0]} onClick={() => latest(pages[0])}>
                <Typography textAlign="center">{pages[0]}</Typography>
              </MenuItem> */}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
            AI - NEWS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <Button //latest News
              key={pages[0]}
              onClick={latest}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {/* {pages[0]} */}
              <LatestNews />
            </Button>
            <Button //Category
              key={pages[1]}
              // onClick={latest}
              // onMouseEnter={categoryDisplay}
              // onMouseLeave={categoryDisplay}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {/* {pages[1]} */}
              <Category setNewsArticles={props.setNewsArticles} />
            </Button>
            <Button //Sources
              key={pages[2]}
              // onClick={latest}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {/* {pages[2]} */}
              <Sources setNewsArticles={props.setNewsArticles} />
            </Button>
          </Box>

          {isAuthenticated ? (
            <Typography variant="p" sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 1000,
              fontSize: "1.1rem",
              letterSpacing: ".1rem",
              color: "#ffee58",
              textDecoration: "none",
            }}>
              Hello, {user.name}!
            </Typography>
          ) : null}

          <Box sx={{ flexGrow: 0 }}>
            {isAuthenticated ? (
              <>
                <Button variant="contained" color="error"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Log Out
                </Button>
              </>
            ) : (
              <Button variant="contained" color="success" onClick={() => loginWithRedirect()}>Log In</Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
