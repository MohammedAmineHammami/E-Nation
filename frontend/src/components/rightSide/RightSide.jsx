import React, { useContext } from "react";
import "./right.css";
import me from "../../img/me.jpg";
import { ThemeContext } from "../../context/ThemeContextProvider";

function RightSide() {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={mode ? "darkRightContenair" : "rightSideContenair"}>
      <div className={mode ? "darkSuggestions" : "suggestions"}>
        <span>Suggestions for you</span>
        <div className="suggestion">
          <div className="suggUsers">
            <img className="userImg" src={me} alt="" />
            <h5 style={{ display: "inline" }}>username</h5>
          </div>
          <div className="suggControllers">
            <button className="followBtn">follow</button>
            <button className="dismissBtn">dismiss</button>
          </div>
        </div>

        <div className="suggestion">
          <div className="suggUsers">
            <img className="userImg" src={me} alt="" />
            <h5 style={{ display: "inline" }}>username</h5>
          </div>
          <div className="suggControllers">
            <button className="followBtn">follow</button>
            <button className="dismissBtn">dismiss</button>
          </div>
        </div>
      </div>

      <div className={mode ? "darkLatestActivities" : "latestActivities"}>
        <span>Latest Activities</span>
        <div className="activityDiv">
          <div className="suggUsers">
            <img className="userImg" src={me} alt="" />
            <h5 style={{ display: "inline" }}>username</h5>
            <span className="activity">liked a post</span>
          </div>
          <span>1 min ago</span>
        </div>
        <div className="activityDiv">
          <div className="suggUsers">
            <img className="userImg" src={me} alt="" />
            <h5 style={{ display: "inline" }}>username</h5>
            <span className="activity">change their cover pic</span>
          </div>
          <span>1 min ago</span>
        </div>
        <div className="activityDiv">
          <div className="suggUsers">
            <img className="userImg" src={me} alt="" />
            <h5 style={{ display: "inline" }}>username</h5>
            <span className="activity">liked a post</span>
          </div>
          <span>1 min ago</span>
        </div>
      </div>

      <div className={mode ? "darkOnline" : "online"}>
        <div className="suggUsers">
          <img className="userImg" src={me} alt="" />
          <div className="greenCircle"></div>
          <h5 style={{ display: "inline" }}>username</h5>
        </div>
        <div className="suggUsers">
          <img className="userImg" src={me} alt="" />
          <div className="greenCircle"></div>
          <h5 style={{ display: "inline" }}>username</h5>
        </div>
        <div className="suggUsers">
          <img className="userImg" src={me} alt="" />
          <div className="greenCircle"></div>
          <h5 style={{ display: "inline" }}>username</h5>
        </div>
        <div className="suggUsers">
          <img className="userImg" src={me} alt="" />
          <div className="greenCircle"></div>
          <h5 style={{ display: "inline" }}>username</h5>
        </div>
        <div className="suggUsers">
          <img className="userImg" src={me} alt="" />
          <div className="greenCircle"></div>
          <h5 style={{ display: "inline" }}>username</h5>
        </div>
        <div className="suggUsers">
          <img className="userImg" src={me} alt="" />
          <div className="greenCircle"></div>
          <h5 style={{ display: "inline" }}>username</h5>
        </div>
        <div className="suggUsers">
          <img className="userImg" src={me} alt="" />
          <div className="greenCircle"></div>
          <h5 style={{ display: "inline" }}>username</h5>
        </div>
        <div className="suggUsers">
          <img className="userImg" src={me} alt="" />
          <div className="greenCircle"></div>
          <h5 style={{ display: "inline" }}>username</h5>
        </div>
        <div className="suggUsers">
          <img className="userImg" src={me} alt="" />
          <div className="greenCircle"></div>
          <h5 style={{ display: "inline" }}>username</h5>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
