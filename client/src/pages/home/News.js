import React, { useEffect, useState } from "react";
import PORT from "../../assets/constant/Url";
import axios from "axios";

const News = () => {
  const [blogPost, setBlogPost] = useState([]);
  const [blogCategory, setBlogCategory] = useState([]);

  useEffect(() => {
    getPosts();
    getData();
  }, []);

  const getPosts = async () => {
    try {
      const res = await axios.get(`${PORT}getpublishedblogpost`);
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

  return (
    <>
      <div className="w-full bg-gray-100">
        <div className="w-4/5 mx-auto flex flex-wrap mb-10 py-6">
          <div className="w-full">
            <div>
              <span className="section_title">خبریں:-</span>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-wrap bg-white shadow-lg rounded justify-around mt-5 px-3 py-6">
              {blogPost.length > 0 ? (
                blogPost.map((e, idx) => {
                  let flag = 0;
                  return (
                    <div className="three-news" key={idx}>
                      <span className="news-category-name">
                        {blogCategory.map((x) => {
                          if (e.blog_category === x.id) {
                            flag = 1;
                            return x.category_name;
                          }
                        })}
                        {flag === 0 ? "null" : ""}
                      </span>
                      <div className="max-h-1/2 overflow-hidden">
                        <img
                          src={`./upload/${e.blog_image}`}
                          className="rounded-sm"
                          width="100%"
                          height="100%"
                          alt="news-img"
                        />
                      </div>
                      <div className="px-2 pt-3 pb-4 font-bold text-lg leading-5 tracking-wide">
                        <p>{e.blog_title}</p>
                      </div>
                      <div className="px-2 text-blue-400 text-sm">
                        <span className="hover:underline">
                          اشاعت کی تاریخ: {formatDate(e.blog_publish_date)}
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="font-bold text-xl">خبریں دستیاب نہیں ہیں۔</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
