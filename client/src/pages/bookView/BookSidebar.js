import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PORT from "../../assets/constant/Url";

function BookSidebar() {
    const [booklogCategory, setBooklogCategory] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    // Get book category data
    const getData = async () => {
        try {
            const res = await axios.get(`${PORT}getbookcategory`);
            setBooklogCategory(res.data);
        
        } catch (error) {
            console.log(error);
        }
    };


   
    return (
        <div> <img
            src={require('../../assets/image/adverti-image-veiw-news-page.jpg')}
            alt="news"
            width="350px"
            height="50%"
        /></div>
    )
}

export default BookSidebar