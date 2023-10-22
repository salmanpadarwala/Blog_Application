import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PORT from "../../assets/constant/Url";

const Books = () => {
  const [booklogCategory, setBooklogCategory] = useState([]);
  const [booksByCategory, setBooksByCategory] = useState({});

  useEffect(() => {
    getData();
  }, []);

  // Get book category data
  const getData = async () => {
    try {
      const res = await axios.get(`${PORT}getbookcategory`);
      setBooklogCategory(res.data);
      if (res.data.length > 0) {
        res.data.forEach((category) => {
          getBooksByCategory(category.id);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Filter and get books by category
  const getBooksByCategory = async (categoryId) => {
    try {
      const res = await axios.get(`${PORT}getCateFilter/${categoryId}`);
      setBooksByCategory((prevData) => ({
        ...prevData,
        [categoryId]: res.data,
      }));
    } catch (err) {
      console.log(err);
    }
  };


  //PASS DATA BOOK VIEW PAGE
  const navigate = useNavigate();
  const gotoBookViewpage = (bookId) => {
    navigate(`/viewBookPage/${bookId}`, {
      state: { id: bookId },
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="  bg-gray-100 ">
      <div className="books_main_contant ms-14 ">
        <div className="books_main_tile">
          <p className="books_title ">کتابیں</p>
          <p className="books_des mt-8 w-1/2 leading-10">پلٹزر پرائز کے فاتحین سے لے کر نیو یارک ٹائمز کے بیسٹ سیلرز تک، سیاست، عصری فکشن اور مزید بہت کچھ تک ہماری سب سے زیادہ فروخت ہونے والی ای بکس کا بھرپور انتخاب دریافت کریں۔</p>
        </div>
      </div>



      <div className=" mx-auto flex flex-wrap py-6">
        {booklogCategory.map((category, idx) => (
          <div key={idx} className="w-full">

            <div className="books_main flex bg-white" >
              {booksByCategory[category.id]?.map((book, bookIdx) => (
                <div key={bookIdx} className="books_card w-1/6 mt-14 ms-12">
                  <div className="books_card_bg" onClick={() => { gotoBookViewpage(book.id) }}>
                    <div className="books_card">
                      <div className="books_card_img">
                        <img
                          className="books_card_img_2"
                          src={`../../upload/${book.book_thumbnail}`}
                          alt={book.book_title}
                        />
                      </div>
                      <div className="books_card_containt">
                        <p className="card_des">{book.book_title}</p>
                        <p className="card_des_sec">{book.author}</p>
                        <i class="fa-solid fa-star text-yellow-600"></i>
                        <i class="fa-solid fa-star text-yellow-600"></i>
                        <i class="fa-solid fa-star text-yellow-600"></i>
                        <i class="fa-solid fa-star text-yellow-600"></i>
                        <i class="fa-regular fa-star"></i>
                      </div>

          <div className="w-full">
            <div className="flex flex-wrap">
              <div className="w-full">
                <ul
                  className="flex mt-6 mb-3 list-none flex-wrap flex-row rounded"
                  role="tablist"
                >
                  {booklogCategory.length > 0 ? (
                    booklogCategory.map((e, idx) => (
                      <li
                        className="text-center me-2 last:me-0 lg:mb-0 mb-2 tab-list"
                        key={idx}
                      >
                        <NavLink
                          className={`text-xs font-bold uppercase px-3 py-3 rounded block ${
                            selectedTab === e.id ? "active-tabs" : ""
                          }`}
                          onClick={() => {
                            filtercateData(e.id);
                          }}
                          to={`#${e.category_name}`}
                          role="tablist"
                        >
                          {e.category_name}
                        </NavLink>
                      </li>
                    ))
                  ) : (
                    <li>کوئی اقسام دستیاب نہیں ہیں۔</li>
                  )}
                </ul>

                <div className="mx-auto relative flex flex-col bg-white mb-6 shadow-lg rounded">
                  <div className="px-3 py-5">
                    <div className="flex flex-wrap justify-around">
                      {cateFilter.length > 0 ? (
                        cateFilter.map((books, idx) => (
                          <div
                            className="islamic-books shadow-lg"
                            id={`#${books.books_category}`}
                            key={idx}
                            onClick={() => {
                              gotoBookViewpage(books.id);
                            }}
                          >
                            <div className="islamic-books-main">
                              <img
                                className="islamic-book-image"
                                src={`../upload/${books.book_thumbnail}`}
                                alt={books.book_title}
                              />
                            </div>
                            <div className="book_title">
                              <p>{books.book_title}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="not_avial_text">
                          کتابیں دستیاب نہیں ہیں۔
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
