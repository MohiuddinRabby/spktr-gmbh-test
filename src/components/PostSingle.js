import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSinglePostData } from "../global/api/Api";

const PostSingle = () => {
  const [singlePost, setSinglePost] = useState();
  const { id } = useParams();
  useEffect(() => {
    getSinglePostData(id, setSinglePost);
  }, [id]);
  return (
    <div className="container text-center">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">ID: {singlePost?.id}</h4>
          <h5 className="card-title">Title: {singlePost?.title}</h5>
          <p className="card-text">Body: {singlePost?.body}</p>
          <Link to="/" className="btn btn-primary btn-sm">
            Back to Home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostSingle;
