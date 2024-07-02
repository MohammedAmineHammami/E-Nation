import React, { useContext } from "react";
import "./home.css";
import { ThemeContext } from "../../context/ThemeContextProvider";
import Share from "../../components/share/Share";
import Post from "../../components/post/Post";
import { useQuery } from "react-query";
import { axiosRequest } from "../../helper/requestHelper";
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
  const { mode } = useContext(ThemeContext);

  const { isLoading, error, data } = useQuery("posts", () =>
    axiosRequest.get(`/posts/all`).then((res) => {
      return res.data;
    })
  );

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
      <Share />
      {error
        ? "Something went wrong!Please try again..!"
        : isLoading
        ? "is Loading "
        : data?.map((el, i) => {
            return <Post post={el} mode={mode} key={i} />;
          })}
    </div>
  );
}

export default Home;
