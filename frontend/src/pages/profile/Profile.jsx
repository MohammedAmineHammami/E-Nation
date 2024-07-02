import React, { useContext } from "react";
import "./profile.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ThemeContext } from "../../context/ThemeContextProvider";
import Share from "../../components/share/Share";
import { AuthContext } from "../../context/AuthContextProvider";
import user from "../../assets/user.png";
import { useQuery } from "react-query";
import { axiosRequest } from "../../helper/requestHelper.js";
import Post from "../../components/post/Post.jsx";

function Profile() {
  const { mode } = useContext(ThemeContext);
  const { signedUser } = useContext(AuthContext);
  const { isLoading, error, data } = useQuery("posts", () =>
    axiosRequest.get(`/posts/${signedUser.username}/all`).then((res) => {
      return res.data;
    })
  );

  return (
    <div className={mode ? "DarkprofileContenair" : "profileContenair"}>
      <img
        src={
          signedUser.user_cover_img ||
          "https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png"
        }
        alt=""
        className="coverImg"
      />
      <img
        src={signedUser.user_profile_img || user}
        alt=""
        className="profileImg"
      />
      <div className={mode ? "userProfileInfoDark" : "userProfileInfo"}>
        <div className="messanger">
          <h1>{signedUser.username}</h1>
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
      <Share />
      {error
        ? "Something went wrong!Please refresh the page!"
        : isLoading
        ? " is loading"
        : data?.map((el, i) => {
            return <Post post={el} key={i} mode={mode} />;
          })}
    </div>
  );
}

export default Profile;
