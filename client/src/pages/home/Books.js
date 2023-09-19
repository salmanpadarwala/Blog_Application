import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import PORT from "../../assets/constant/Url";

const Books = () => {
  const [booklogCategory, setbooklogCategory] = useState([]);
  const [selectedTab, setSelectedTab] = useState(
    booklogCategory.length > 0 ? booklogCategory[0].id : null
  );
  const [cateFilter, setCateFilter] = useState([]);

  useEffect(() => {
    getData();
  }, [booklogCategory]);

  // get book category data
  const getData = async () => {
    try {
      const res = await axios.get(`${PORT}getbookcategory`);
      setbooklogCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filtercateData = async (id) => {
    try {
      const res = await axios.get(`${PORT}getCateFilter/${id}`);
      setCateFilter(res.data);
      setSelectedTab(id);
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
    <>
      <div className="w-full bg-gray-100">
        <div className="w-4/5 mx-auto flex flex-wrap py-6">
          <div className="w-full">
            <div>
              <span className="section_title">کتابیں:-</span>
            </div>
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
                          className={`text-xs font-bold uppercase px-3 py-3 rounded block ${selectedTab === e.id ? "active-tabs" : ""
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
                            onClick={() => { gotoBookViewpage(books.id) }}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
