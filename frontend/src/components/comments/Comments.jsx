import React from "react";
import "./comments.css";
import me from "../../img/me.jpg";

function Comments() {
  return (
    <div className="commentSection">
      <div className="addComment">
        <img src={me} alt="" className="userImg" />
        <input
          type="text"
          placeholder=" write a comment"
          name="comment"
          className="commentInput"
          required
        />
        <button className="sendCommentBtn">Send</button>
      </div>
      <div className="postedComment">
        <img src={me} alt="" className="userImg" />
        <div className="postedCommentData">
          <b>username</b>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
      </div>
      <div className="postedComment">
        <img src={me} alt="" className="userImg" />
        <div className="postedCommentData">
          <b>username</b>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
      </div>
      <div className="postedComment">
        <img src={me} alt="" className="userImg" />
        <div className="postedCommentData">
          <b>username</b>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Comments;
