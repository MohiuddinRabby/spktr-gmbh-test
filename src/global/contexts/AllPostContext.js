import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getAllPostData } from "../api/Api";

export const AllPostContext = createContext();
export const AllPostContextPorvider = (props) => {
  const [allPost, setAllPost] = useState([]);
  useEffect(() => {
    getAllPostData(setAllPost);
  }, []);
  return (
    <AllPostContext.Provider value={{ allPost }}>
      {props.children}
    </AllPostContext.Provider>
  );
};
