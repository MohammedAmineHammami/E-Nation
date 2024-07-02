import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ShareIcon from "@mui/icons-material/Share";
import Comments from "../../components/comments/Comments";
import user from "../../assets/user.png";
import "./post.css";
import { axiosRequest } from "../../helper/requestHelper";
import ClearIcon from "@mui/icons-material/Clear";

function Post({ post, mode }) {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);
  const [textDecoration, setTextDecoration] = useState({});
  const [deleteIndicator, setDeleteIndicator] = useState(false);
  const navigate = useNavigate();

  const handleDeletePost = async (id) => {
    try {
      axiosRequest.delete(`/posts/delete/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={mode ? "darkPost" : "post"}>
      <div className="postHead">
        <div className="postHeadS1">
          <img
            src={post?.user_profile_img || user}
            alt=""
            className="userImg"
          />
          <div className="userHeadInfo">
            <b
              onClick={() => navigate(`/profile/${post.post_id}`)}
              style={textDecoration}
              onMouseMove={() =>
                setTextDecoration({
                  textDecoration: "underline",
                  cursor: "pointer",
                })
              }
              onMouseLeave={() => setTextDecoration({ textDecoration: "none" })}
            >
              {post.username}
            </b>
            <span style={{ fontSize: "14px" }}>a few seconds ago</span>
          </div>
        </div>
        {deleteIndicator ? (
          <div>
            <MoreVertIcon
              onClick={() => {
                setDeleteIndicator(!deleteIndicator);
              }}
            />
            <ClearIcon onClick={handleDeletePost} />
          </div>
        ) : (
          <MoreVertIcon
            onClick={() => {
              setDeleteIndicator(!deleteIndicator);
            }}
          />
        )}
      </div>
      <p>{post.post_title}</p>
      <img
        className="postImg"
        src={post.post_img}
        alt=""
        style={{ display: post.post_img === null && "none" }}
      />
      <div className="postBottomSections">
        <div onClick={() => setLike(!like)} className="likes">
          {like ? (
            <FavoriteIcon style={{ color: like && "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
          <span>Likes</span>
        </div>
        <div className="likes" onClick={() => setComment(!comment)}>
          <SmsOutlinedIcon />
          <span>Comments</span>
        </div>
        <div className="likes">
          <ShareIcon />
          <span>Share</span>
        </div>
      </div>
      {comment && <Comments />}
    </div>
  );
}

export default Post;
