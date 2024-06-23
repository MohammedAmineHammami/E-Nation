import React, { useContext, useState } from "react";
import "./home.css";
import me from "../../img/me.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ShareIcon from "@mui/icons-material/Share";
import Comments from "../../components/comments/Comments";
import { ThemeContext } from "../../context/ThemeContextProvider";

const images = [
  {
    id: 1,
    img: "https://im.whatshot.in/img/2018/Mar/ver-1522073949.jpg",
    username: "Jhon Doe",
  },
  {
    id: 1,
    img: "https://im.whatshot.in/img/2018/Mar/ver-1522073949.jpg",
    username: "Jhon Doe",
  },
  {
    id: 1,
    img: "https://im.whatshot.in/img/2018/Mar/ver-1522073949.jpg",
    username: "Jhon Doe",
  },
  {
    id: 1,
    img: "https://im.whatshot.in/img/2018/Mar/ver-1522073949.jpg",
    username: "Jhon Doe",
  },
  {
    id: 1,
    img: "https://im.whatshot.in/img/2018/Mar/ver-1522073949.jpg",
    username: "Jhon Doe",
  },
];

function Home() {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);
  const { mode } = useContext(ThemeContext);

  return (
    <div className={mode ? "darkHomePage" : "homePage"}>
      <div className="stories">
        {images?.map((el, i) => {
          return (
            <div className="story" key={i}>
              <img className="storyImg" src={el.img} alt="" key={i} />
              <h4 className="storyUsername">{el.username}</h4>
            </div>
          );
        })}
      </div>

      <div className={mode ? "darkPost" : "post"}>
        <div className="postHead">
          <div className="postHeadS1">
            <img src={me} alt="" className="userImg" />
            <div className="userHeadInfo">
              <b>username</b>
              <span style={{ fontSize: "14px" }}>a few seconds ago</span>
            </div>
          </div>
          <MoreVertIcon />
        </div>
        <p>
          Dopamine is a critical neurotransmitter that plays a pivotal role in
          shaping our drive and motivation.
        </p>
        <img
          className="postImg"
          src="https://i.ytimg.com/vi/QmOF0crdyRU/maxresdefault.jpg"
          alt=""
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
    </div>
  );
}

export default Home;
