import React, { useContext } from "react";
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
function LeftSide() {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={mode ? "leftSideContenair" : "leftSideContenairDarkmode"}>
      <div className="general">
        <div className="item">
          <img style={{ width: "35px" }} src={user} alt="" />
          <span>Jhon Doe</span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={friends} alt="" />
          <span>Friends</span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={group} alt="" />
          <span>Group</span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={marketplace} alt="" />
          <span>Marketplace</span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={watch} alt="" />
          <span>Watch</span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={memories} alt="" />
          <span>Memories</span>
        </div>
      </div>

      <hr className="hr" />

      <div className="general">
        <span className="letTitle">Your shourtcuts</span>
        <div className="item">
          <img style={{ width: "35px" }} src={events} alt="" />
          <span>Events</span>
        </div>
        <div className="item">
          <img style={{ width: "35px" }} src={gaming} alt="" />
          <span>Gaming</span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={gallery} alt="" />
          <span>Gallery</span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={video} alt="" />
          <span>Videos</span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={message} alt="" />
          <span>Messages</span>
        </div>
      </div>

      <hr className="hr" />

      <div className="general">
        <span className="letTitle">Others</span>
        <div className="item">
          <img style={{ width: "35px" }} src={fundraiser} alt="" />
          <span>Fundraiser</span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={courses} alt="" />
          <span>Courses</span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={tutoriels} alt="" />
          <span>Tutoriels</span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={income} alt="" />
          <span>Income</span>
        </div>

        <div className="item">
          <img style={{ width: "35px" }} src={feedback} alt="" />
          <span>Feedbacks</span>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
