import React, { useContext, useState } from "react";
import "./left.css";
import user from "../../assets/user.png";
import friends from "../../assets/friendship.png";
import group from "../../assets/group.png";
import marketplace from "../../assets/shop.png";
import watch from "../../assets/watch.png";
import memories from "../../assets/memories.png";
import events from "../../assets/events.png";
import gaming from "../../assets/gaming.png";
import gallery from "../../assets/gallery.png";
import video from "../../assets/videos.png";
import message from "../../assets/message.png";
import fundraiser from "../../assets/donation.png";
import courses from "../../assets/audio-book.png";
import tutoriels from "../../assets/educational-video.png";
import income from "../../assets/income.png";
import feedback from "../../assets/feedback.png";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { AuthContext } from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function LeftSide() {
  const { mode } = useContext(ThemeContext);
  const { signedUser } = useContext(AuthContext);
  const [textDecoration, setTextDecoration] = useState({});
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    setId(() => e.target.id);
    setTextDecoration({
      textDecoration: "underLine",
      cursor: "pointer",
      fontWeight: "bold",
    });
  };
  const handleMouseLeave = () => setTextDecoration({ textDecoration: "none" });

  return (
    <div className={mode ? "leftSideContenairDark" : "leftSideContenair"}>
      <div className="general">
        <div className="item">
          <img
            style={{ width: "45px", height: "45px" }}
            src={signedUser?.user_profile_img || user}
            alt=""
            className="userImg"
          />
          <span
            style={
              id === "username" ? textDecoration : { textDecoration: "none" }
            }
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="username"
            onClick={() => navigate(`/profile/${signedUser.user_id}`)}
          >
            {signedUser?.username || "username"}
          </span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={friends} alt="" />
          <span
            style={id === "friends" ? textDecoration : {}}
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="friends"
          >
            Friends
          </span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={group} alt="" />
          <span
            style={id === "group" ? textDecoration : { textDecoration: "none" }}
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="group"
          >
            Group
          </span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={marketplace} alt="" />
          <span
            style={
              id === "marketPlace" ? textDecoration : { textDecoration: "none" }
            }
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="marketPlace"
          >
            Marketplace
          </span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={watch} alt="" />
          <span
            style={id === "watch" ? textDecoration : { textDecoration: "none" }}
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="watch"
          >
            Watch
          </span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={memories} alt="" />
          <span
            style={
              id === "memories" ? textDecoration : { textDecoration: "none" }
            }
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="memories"
          >
            Memories
          </span>
        </div>
      </div>

      <hr className="hr" />

      <div className="general">
        <span className="letTitle">Your shourtcuts</span>
        <div className="item">
          <img style={{ width: "35px" }} src={events} alt="" />
          <span
            style={
              id === "events" ? textDecoration : { textDecoration: "none" }
            }
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="events"
          >
            Events
          </span>
        </div>
        <div className="item">
          <img style={{ width: "35px" }} src={gaming} alt="" />
          <span
            style={
              id === "gaming" ? textDecoration : { textDecoration: "none" }
            }
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="gaming"
          >
            Gaming
          </span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={gallery} alt="" />
          <span
            style={
              id === "gallery" ? textDecoration : { textDecoration: "none" }
            }
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="gallery"
          >
            Gallery
          </span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={video} alt="" />
          <span
            style={
              id === "videos" ? textDecoration : { textDecoration: "none" }
            }
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="videos"
          >
            Videos
          </span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={message} alt="" />
          <span
            style={
              id === "messages" ? textDecoration : { textDecoration: "none" }
            }
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="messages"
          >
            Messages
          </span>
        </div>
      </div>

      <hr className="hr" />

      <div className="general">
        <span
          style={id === "others" ? textDecoration : { textDecoration: "none" }}
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseLeave={handleMouseLeave}
          id="others"
          className="letTitle"
        >
          Others
        </span>
        <div className="item">
          <img style={{ width: "35px" }} src={fundraiser} alt="" />
          <span
            style={
              id === "fundraiser" ? textDecoration : { textDecoration: "none" }
            }
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="fundraiser"
          >
            Fundraiser
          </span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={courses} alt="" />
          <span
            style={
              id === "courses" ? textDecoration : { textDecoration: "none" }
            }
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="courses"
          >
            Courses
          </span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={tutoriels} alt="" />
          <span
            style={
              id === "tutoriels" ? textDecoration : { textDecoration: "none" }
            }
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="tutoriels"
          >
            Tutoriels
          </span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={income} alt="" />
          <span
            style={id === "icome" ? textDecoration : { textDecoration: "none" }}
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="icome"
          >
            Income
          </span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={feedback} alt="" />
          <span
            style={
              id === "feedbacks" ? textDecoration : { textDecoration: "none" }
            }
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={handleMouseLeave}
            id="feedbacks"
          >
            Feedbacks
          </span>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
