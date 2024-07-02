import React, { useContext, useState } from "react";
import "./navbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import user from "../../assets/user.png";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { AuthContext } from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { mode, toggleMode } = useContext(ThemeContext);
  const { signedUser, logout } = useContext(AuthContext);
  const [textDecoration, setTextDecoration] = useState({});
  const navigate = useNavigate();

  return (
    <div className={mode ? "darkNavbar" : "navbar"}>
      <div className="leftSide">
        <h1 className="logo">E-Nation</h1>
        <HomeOutlinedIcon
          className="navBarIcons"
          onClick={() => navigate("/")}
        />
        {mode ? (
          <LightModeOutlinedIcon
            className="navBarIcons"
            onClick={() => toggleMode()}
          />
        ) : (
          <DarkModeOutlinedIcon
            className="navBarIcons"
            onClick={() => toggleMode()}
          />
        )}
        <WidgetsOutlinedIcon className="navBarIcons" />
        <div className="searchBar">
          <SearchIcon className="navBarIcons" style={{ fontSize: "20px" }} />
          <input type="text" placeholder="search" required />
        </div>
      </div>

      <div className="rightSide">
        <PersonOutlineOutlinedIcon className="navBarIcons" />
        <EmailOutlinedIcon className="navBarIcons" />
        <NotificationsOutlinedIcon className="navBarIcons" />
        <LogoutOutlinedIcon className="navBarIcons" onClick={logout} />
        <div className="userDiv">
          <img
            style={{ width: "45px" }}
            src={signedUser?.user_profile_img || user}
            alt=""
            className="userImg"
          />
          <h4
            style={textDecoration}
            onMouseEnter={() =>
              setTextDecoration({
                textDecoration: "underLine",
                cursor: "pointer",
              })
            }
            onMouseLeave={() => setTextDecoration({ textDecoration: "none" })}
            onClick={() => navigate(`/profile/${signedUser.user_id}`)}
          >
            {signedUser?.username}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
