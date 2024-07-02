import React, { useContext, useRef, useState } from "react";
import "./share.css";
import me from "../../img/me.jpg";
import { ThemeContext } from "../../context/ThemeContextProvider";
import addMap from "../../assets/addMap.png";
import addPicture from "../../assets/addPicture.png";
import addUser from "../../assets/addUser.png";
import { AuthContext } from "../../context/AuthContextProvider";
import axios from "axios";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LoadingBar from "react-top-loading-bar";
import { axiosRequest } from "../../helper/requestHelper";
import { useMutation, useQueryClient } from "react-query";

function Share() {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");
  const { mode } = useContext(ThemeContext);
  const { signedUser } = useContext(AuthContext);
  const [uploadImgErr, setUploadImgErr] = useState(null);
  const loadingBar = useRef(null);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "bzajqqdx");
    loadingBar.current.continuousStart();
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dtxxcyidt/upload",
        formData
      );
      setFile(() => response?.data?.secure_url);
    } catch (err) {
      setUploadImgErr(err.response.data);
    } finally {
      loadingBar.current.complete();
    }
  };

  //update posts by adding new posts
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return axiosRequest.post("/posts/add", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleShareBtn = (e) => {
    e.preventDefault();
    mutation.mutate({ title: desc, img: file });
    setDesc("");
    setFile("");
  };

  return (
    <div className={mode ? "darkshareComp" : "shareComp"}>
      <div className="shareTopSection">
        <img
          src={signedUser?.user_profile_img || me}
          alt=""
          className="shareUserImg"
        />
        <textarea
          type="text"
          className={mode ? "darkShareInput" : "shareInput"}
          placeholder={`what's on your mind Mr ${signedUser.username}?`}
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          required
        />
        <LoadingBar
          style={{ height: "10px" }}
          color="#1388bc"
          ref={loadingBar}
        />
        {file ? (
          <div className="uploadImgPreset">
            <CloseOutlinedIcon
              onClick={() => setFile(null)}
              style={{ color: mode ? "white" : "black" }}
              className="cancelImg"
            />
            <img src={file} className="shareImg" alt="" />
          </div>
        ) : (
          <span style={{ color: "red" }}>{uploadImgErr}</span>
        )}
      </div>
      <div className="lowerSection">
        <hr />
        <div className="shareBottomSection">
          <div className="shareBottomSectionIcons">
            <div className="bottomIcon">
              <input
                type="file"
                onChange={handleFileChange}
                alt=""
                src={addPicture}
                style={{ width: "30px", display: "none" }}
                id="uploadImg"
              />
              <label htmlFor="uploadImg" style={{ cursor: "pointer" }}>
                <img src={addPicture} alt="" style={{ width: "35px" }} />
              </label>

              <span>add img</span>
            </div>

            <div className="bottomIcon">
              <img src={addMap} alt="" style={{ width: "35px" }} />
              <span>add location</span>
            </div>

            <div className="bottomIcon">
              <img src={addUser} alt="" style={{ width: "30px" }} />
              <span>tag friends</span>
            </div>
          </div>
          <button className="followBtn" onClick={handleShareBtn}>
            share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share;
