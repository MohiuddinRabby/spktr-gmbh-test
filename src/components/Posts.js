import React from "react";
import { Link} from "react-router-dom";

const Posts = (props) => {
  const { id, title, body } = props.posts;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <Link to={"/posts/" + id}
          className="btn btn-primary btn-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Posts;
