import "./post.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TextsmsOutlineIcon from "@mui/icons-material/TextsmsOutlined";
import Comments from "../comments/Comments";
import { Link } from "react-router-dom";
import { useState } from "react";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  let liked = false;
  return (
    <div className="post">
      <div className="container">
        <div className="postHeader">
          <div className="user">
            <div className="userInfo">
              <img src={post.profilePic} alt="" />
              <div className="details">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/profile/${post.userId}`}
                >
                  <span className="name">{post.name}</span>
                </Link>
                <span className="date">1 min ago</span>
              </div>
            </div>
            <MoreHorizIcon />
          </div>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            <span>12 likes</span>
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlineIcon />
            <span>12 comments</span>
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            <span>share</span>
          </div>
        </div>
      </div>
      <div>{commentOpen && <Comments />}</div>
    </div>
  );
};

export default Post;
