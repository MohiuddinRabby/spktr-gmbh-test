import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center pt-5">
      <h1 className="text-warning">Page Not Found !!!</h1>
      <Link to="/" className="btn btn-primary btn-sm">Back to homepage</Link>
    </div>
  );
};

export default NotFound;
