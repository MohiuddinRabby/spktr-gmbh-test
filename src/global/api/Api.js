import Axios from "axios";
// get all post
export const getAllPostData = async (setter) => {
  try {
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/posts`);
    if (res.status === 200 && res?.data) {
      setter(res?.data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
// get single post
export const getSinglePostData = async (id, setter) => {
  try {
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (res.status === 200 && res?.data) {
      setter(res?.data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
//save to jsonplaceholder
export const saveBlogPost = async (data) => {
  try {
    const res = await Axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      data
    );
    if (res.status === 201) {
      alert("Blog Posted to JsonPlaceHolder");
    }
  } catch (error) {
    alert(error.message);
  }
};
//delete post
export const deleteBlogPost = async (blogID) => {
  try {
    const res = await Axios.delete(`https://jsonplaceholder.typicode.com/posts/${blogID}`);
    if (res.status === 200) {
      alert("Blog deleted from DB");
    }
  } catch (error) {
    console.log(error.message);
  }
};
