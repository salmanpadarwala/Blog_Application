import React, { useState, useEffect } from "react";
import axios from "axios";
import PORT from "../../assets/constant/Url";
import { useLocation, useNavigate } from "react-router-dom";

const NewsSidebar = () => {
  const [blogPost, setBlogPost] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    try {
      const res = await axios.get(`${PORT}getblogpostwithlimit`);
      setBlogPost(res.data);
    } catch (err) {
      console.log(err);
    }
  };

    const navigate = useNavigate();
    const gotoNewsViewPage = (newsId) => {
        navigate(`/viewnews/${newsId}`, {
            state: { id: newsId },
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };
    return (
        <>

            <div className='view_news_main_section-sidebar'>
                <div className='view_sidebar_img'>
                    <img src={require('../../assets/image/adverti-image-veiw-news-page.jpg')} alt="" />
                </div>
                <div className="mt-5 relative w-full text-grey-600" dir='ltr'>
                    <input
                        className="search-input focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="search here..."
                    />
                    <button
                        type="button"
                        className="absolute right-0 top-0 mt-5 mr-4"
                    ></button>
                </div>
                <div className='view_news_content ms-1'>
                    <p>حالیہ پوسٹ :-</p>
                </div>
                <div className='newsidebar_main_contant'>
                    {blogPost.map((post, index) => (
                        <div className='flex newsidebar_main_con' key={index} onClick={() => { gotoNewsViewPage(post.id) }}>
                            <div className='w-4/12 newsidebar_img mt-5'>
                                <img src={`/upload/${post.blog_image}`} alt="" />
                            </div>

                            <div className='w-8/12 '>
                                <p className='sidbar-veiw-content  ms-3'>{truncateText(post.blog_title, 50)}</p>
                            </div>
                        </div>
                    ))}
                </div>

  const navigate = useNavigate();
  const gotoNewsViewPage = (newsId) => {
    navigate(`/viewnews/${newsId}`, {
      state: { id: newsId },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="view_news_main_section_sidebar">
        <div>
          <img
            src={require("../../assets/image/adverti-image-veiw-news-page.jpg")}
            alt=""
          />
        </div>
        <div className="mt-5 relative w-full text-gray-600">
          <input
            className="search-input focus:outline-none"
            type="search"
            name="search"
            placeholder="یہاں تلاش کریں..."
          />
          <button
            type="button"
            className="absolute right-0 top-0 mt-5 mr-4"
          ></button>
        </div>
        <div className="view_news_content">
          <p>حالیہ پوسٹ :-</p>
        </div>
        {blogPost.map((post, index) => (
          <div
            className="flex"
            key={index}
            onClick={() => {
              gotoNewsViewPage(post.id);
            }}
          >
            <div className="w-8/12">
              <p className="sidbar-veiw-content">{post.blog_title}</p>

            </div>
            <div className="w-4/12 mb-3">
              <img src={`/upload/${post.blog_image}`} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsSidebar;
