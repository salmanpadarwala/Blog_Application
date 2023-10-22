import React, { useEffect, useState } from "react";
import PORT from "../../assets/constant/Url";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const News = () => {
  const [blogPost, setBlogPost] = useState([]);
  const [blogCategory, setBlogCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts();
    getData();
  }, []);

  const getPosts = async () => {
    try {
      const res = await axios.get(`${PORT}getblogpostwithlimit`);
      setBlogPost(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async () => {
    try {
      const res = await axios.get(`${PORT}getblogcategory`);
      setBlogCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  function formatDate(inputDate) {
    const parts = inputDate.split("-");
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    const date = new Date(year, month - 1, day);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return date.toLocaleDateString("en-US", options);
  }

  const gotoNewsViewPage = (newsId) => {
    navigate(`/viewnews/${newsId}`, {
      state: { id: newsId },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full bg-gray-100">
        <div className="w-4/5 mx-auto flex flex-wrap mb-10 py-6">
          <div className="w-full mb-3">
            <div>
              <span className="section_title">خبریں:-</span>
            </div>
          </div>

          <div className="w-full">
            <div className=" main_news flex flex-wrap bg-white shadow-lg rounded justify-around mt-5">
              {blogPost.length > 0 ? (
                blogPost.map((e, idx) => {
                  let flag = 0;
                  return (
                    <div
                      className="three-news"
                      key={idx}
                      onClick={() => {
                        gotoNewsViewPage(e.id);
                      }}
                    >
                      <span className="news-category-name">
                        {blogCategory.map((x) => {
                          if (e.blog_category === x.id) {
                            flag = 1;
                            return x.category_name;
                          }
                        })}
                        {flag === 0 ? "null" : ""}
                      </span>
                      <div className="news_image_main">
                        <img
                          src={`./upload/${e.blog_image}`}
                          className="islamic-book-image"
                          width="100%"
                          height="100%"
                          alt="news-img"
                        />
                      </div>
                      <div className="news_title">
                        <p>{e.blog_title}</p>
                      </div>
                      <div className="px-2 text-blue-400 text-sm h-auto">
                        <span className="hover:underline">
                          اشاعت کی تاریخ: {formatDate(e.blog_publish_date)}
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="not_avial_text">خبریں دستیاب نہیں ہیں۔</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
