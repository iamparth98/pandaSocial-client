import React, { useContext } from "react";
import "./storeis.scss";
import { AuthContext } from "../../context/AuthContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
