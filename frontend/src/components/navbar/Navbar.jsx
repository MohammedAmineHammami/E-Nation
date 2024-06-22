import React, { useContext } from "react";
import "./navbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import user from "../../assets/user.png";
import { ThemeContext } from "../../context/ThemeContextProvider";

function Navbar() {
  const { mode, setMode } = useContext(ThemeContext);
  return (
    <div className={mode ? "navbar" : "navbarDarkMode"}>
      <div className="leftSide">
        <h1 className="logo">E-Nation</h1>
        <HomeOutlinedIcon />
        {mode ? (
          <LightModeOutlinedIcon onClick={() => setMode()} />
        ) : (
          <DarkModeOutlinedIcon onClick={() => setMode()} />
        )}
        <WidgetsOutlinedIcon />
        <div className="searchBar">
          <SearchIcon style={{ fontSize: "20px" }} />
          <input type="text" placeholder="search" required />
        </div>
      </div>

      <div className="rightSide">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="userDiv">
          <img style={{ width: "35px" }} src={user} alt="" />
          <h4>jhon Doe</h4>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
