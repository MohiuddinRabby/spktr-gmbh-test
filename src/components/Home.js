import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AllPostContext } from "../global/contexts/AllPostContext";
import Posts from "./Posts";

const Home = () => {
  const { allPost } = useContext(AllPostContext);
  console.log(allPost);
  return (
    <div className="container">
      <div className="text-center mt-3">
        <Link to="/create-post" className="btn btn-warning btn-sm">
          Create Post
        </Link>
      </div>
      <div className="row mt-3">
        {allPost?.map((posts) => (
          <div className="col-md-4 py-3" key={posts?.id}>
            <Posts posts={posts}></Posts>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
