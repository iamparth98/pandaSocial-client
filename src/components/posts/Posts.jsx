import React from "react";
import "./posts.scss";
import Post from "../post/Post";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/10536994/pexels-photo-10536994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, animi facere totam tempore voluptas iste molestiae saepe voluptate repellat qui. Eveniet doloremque nam sed porro velit, dolorum sunt maxime dolores.",

      img: "https://images.pexels.com/photos/10536994/pexels-photo-10536994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/10536994/pexels-photo-10536994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, animi facere totam tempore voluptas iste molestiae saepe voluptate repellat qui. Eveniet doloremque nam sed porro velit, dolorum sunt maxime dolores.",

      img: "https://images.pexels.com/photos/10536994/pexels-photo-10536994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "John Doe",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/10536994/pexels-photo-10536994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, animi facere totam tempore voluptas iste molestiae saepe voluptate repellat qui. Eveniet doloremque nam sed porro velit, dolorum sunt maxime dolores.",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
