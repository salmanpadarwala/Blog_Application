import React, { useState, useEffect } from "react";
import "../../../assets/css/admin/style.css";
import axios from "axios";
import PORT from "../../../assets/constant/Url";

const Dashboard = () => {
  const [blogPost, setBlogPost] = useState([]);
  const [pb, setPb] = useState(0);
  const [df, setDf] = useState(0);
  let published = 0;
  let draft = 0;

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await axios.get(`${PORT}getblogposts`);
      setBlogPost(res.data);

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

  return (
    <>
      <div className="px-5 dashboard relative">
        <div className="overview mt-8">
          <div className="title flex align-center">
            <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
            <span className="font-bold ml-3 text-2xl pt-1">Dashboard</span>
          </div>
          <div className="flex items-center justify-between flex-wrap mt-5">
            <div className="boxes box1 flex flex-col items-center bg-blue-500">
              <i className="fa-solid fa-p text-3xl"></i>
              <span className="whitespace-nowrap text-lg font-semibold">
                Total Posts
              </span>
              <span className="font-bold text-4xl">{df + pb}</span>
            </div>

            <div className="boxes box2 flex flex-col items-center bg-orange-300">
              <i className="fa-solid fa-c text-3xl"></i>
              <span className="whitespace-nowrap text-lg font-semibold">
                Contact
              </span>
              <span className="font-bold text-4xl">23</span>
            </div>

            <div className="boxes box3 flex flex-col items-center bg-cyan-300">
              <i className="fa-solid fa-i text-3xl"></i>
              <span className="whitespace-nowrap text-lg font-semibold">
                Inquiry
              </span>
              <span className="font-bold text-4xl">34</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
