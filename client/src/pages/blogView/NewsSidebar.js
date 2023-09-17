import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PORT from '../../assets/constant/Url';

const NewsSidebar = () => {
    const [blogPost, setBlogPost] = useState([]);
    useEffect(() => {
        getPosts();
    }, [])
    const getPosts = async () => {
        try {
            const res = await axios.get(`${PORT}getblogpostwithlimit`);
            setBlogPost(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    console.log(blogPost)
    return (
        <>
            <div className='view_news_main_section-sidebar'>
                <div>
                    <img src={require('../../assets/image/adverti-image-veiw-news-page.jpg')} alt="" />
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
                <div className='view_news_content'>
                    <p>حالیہ پوسٹ :-</p>
                </div>
                {blogPost.map((post, index) => (
                    <div className='flex' key={index}>
                        <div className='w-8/12'>
                            <p className='sidbar-veiw-content'>{post.blog_title}</p>
                        </div>
                        <div className='w-4/12 mb-3'>
                            <img src={`/upload/${post.blog_image}`} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default NewsSidebar
