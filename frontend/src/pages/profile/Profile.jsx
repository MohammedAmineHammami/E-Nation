import React, { useContext } from "react";
import "./profile.css";
import me from "../../img/me.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ThemeContext } from "../../context/ThemeContextProvider";

function Profile() {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={mode ? "DarkprofileContenair" : "profileContenair"}>
      <img
        src="https://i.pinimg.com/originals/53/0a/9b/530a9b45d2f62ebdc52e6d2ec4e6f052.jpg"
        alt=""
        className="coverImg"
      />
      <img src={me} alt="" className="profileImg" />
      <div className={mode ? "userProfileInfoDark" : "userProfileInfo"}>
        <div className="messanger">
          <h1>Mohamed Amine Hammami</h1>
          <div className="msgIcons">
            <MailOutlineIcon />
            <MoreVertIcon />
          </div>
        </div>

        <div className="profileMetaData">
          <div className="userSocialMedia">
            <FacebookIcon />
            <TwitterIcon />
            <XIcon />
            <LinkedInIcon />
          </div>
        </div>

        <div className="userBottomSection">
          <button className="followBtn">follow</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
