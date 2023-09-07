import React, { useState, useEffect } from "react";
import "../../../assets/css/admin/style.css";
import axios from "axios";
import PORT from "../../../assets/constant/Url";

const Dashboard = () => {
  const [pb, setPb] = useState(0);
  const [df, setDf] = useState(0);
  const [getBlogCate, setGetBlogCate] = useState(0);
  const [getPublishBlog, setGetPublishBlog] = useState(0);
  let published = 0;
  let draft = 0;

  useEffect(() => {
    getPosts();
    getCategoryData();
    getPublishedPost();
  }, []);

  const getPosts = async () => {
    try {
      const res = await axios.get(`${PORT}getblogposts`);
      res.data.map((e, idx) => {
        if (e.blog_status) {
          published = published + 1;
        } else {
          draft = draft + 1;
        }
      });
      setPb(published);
      setDf(draft);
    } catch (err) {
      console.log(err);
    }
  };

  //GET BLOG CATEGORY DATA
  const getCategoryData = async () => {
    try {
      const res = await axios.get(`${PORT}getblogcategory`);
      setGetBlogCate(res.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  //GET PUBLISH BLOG
  const getPublishedPost = async () => {
    try {
      const res = await axios.get(`${PORT}getpublishedblogpost`);
      setGetPublishBlog(res.data.length);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="px-5 dashboard relative">
        <div className="overview mt-8">
          <div className="title flex align-center">
            <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
            <span className="font-bold ml-3 text-2xl pt-1">Dashboard</span>
          </div>
          <div className="flex items-center justify-between flex-wrap mt-5">
            <div className="boxes flex flex-col items-center">
              <i className="fa-solid fa-c"></i>
              <span>Blog Category</span>
              <span>{getBlogCate}</span>
            </div>
            <div className="boxes flex flex-col items-center">
              <i className="fa-solid fa-p"></i>
              <span>Total Posts</span>
              <span>{df + pb}</span>
            </div>
            <div className="boxes flex flex-col items-center">
              <i className="fa-solid fa-p"></i>
              <span>Publish Posts</span>
              <span>{getPublishBlog}</span>
            </div>
            <div className="boxes flex flex-col items-center">
              <i className="fa-solid fa-p"></i>
              <span>Total Posts</span>
              <span>2</span>
            </div>
            <div className="boxes flex flex-col items-center">
              <i className="fa-solid fa-p"></i>
              <span>Total Posts</span>
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
