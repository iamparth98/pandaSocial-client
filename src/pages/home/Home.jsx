import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="stories">
        <Stories />
      </div>
      <div className="posts">
        <Posts />
      </div>
    </div>
  );
};

export default Home;
