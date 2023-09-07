import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PORT from "../../../assets/constant/Url";

const AllBooks = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [BookCategory, setBookCategory] = useState([]);
  const [Books, setBooks] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [TotalBooks, setTotalBooks] = useState(0);

  const getBooks = async () => {
    try {
      const res = await axios.get(`${PORT}getbooks`);
      setBooks(res.data);
      setTotalBooks(res.data.length);
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async () => {
    try {
      const res = await axios.get(`${PORT}getbookcategory`);
      setBookCategory(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
    getData();
  }, []);

  const trashBooks = async (id) => {
    try {
      const res = await axios.patch(`${PORT}trashbook/${id}`);
      getBooks();
    } catch (error) {
      window.alert(error);
    }
  };

  const [filterBooks, setfilterBooks] = useState(Books);
  const filterBook = () => {
    const searchTerm = searchFilter.toLowerCase();
    const filteredBooks = Books.filter((item) => {
      const title = item.book_title.toLowerCase().includes(searchTerm);
      const author = item.book_author.toLowerCase().startsWith(searchTerm);
      const bookdesc = item.book_description
        .toLowerCase()
        .startsWith(searchTerm);

      // Apply category filter
      const categoryMatches =
        categoryFilter === "" || item.books_category == categoryFilter;

      return (title || author || bookdesc) && categoryMatches;
    });
    setfilterBooks(filteredBooks);
  };

  useEffect(() => {
    filterBook();
  }, [searchFilter, categoryFilter, Books]);

  const itemPerPage = 10;

  const numberOfPage = Math.ceil(filterBooks.length / itemPerPage);
  const pageIndex = Array.from({ length: numberOfPage }, (_, idx) => idx + 1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const rows = filterBooks.slice(
    currentPage * itemPerPage,
    (currentPage + 1) * itemPerPage
  );

  return (
    <>
      <section className="dashboard relative px-6 py-3 bg-slate-950 shadow-md">
        <div className="flex justify-between items-center">
          <div className="relative flex items-center w-5/12 ml-auto">
            <input
              type="text"
              placeholder="Search Books..."
              className="border border-gray-300 w-full rounded-md px-3 py-2 pr-10 focus:outline-none"
              value={searchFilter}
              onChange={(e) => {
                setSearchFilter(e.target.value);
              }}
            />
            <i className="fa-solid fa-search text-gray-600 absolute right-3 top-1/2 transform -translate-y-1/2"></i>
          </div>
        </div>
      </section>

      <div className="relative dashboard px-5 mt-8">
        <div className="flex align-center">
          <i className="fa-regular fa-clock py-1 px-2 relative bg-blue-500 rounded-md cursor-pointer text-white text-2xl"></i>
          <span className="font-bold ml-3 text-2xl pt-1">All Books</span>
          <NavLink
            to="/addbook"
            className="absolute right-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            <i className="fa-solid fa-plus mr-2"></i>ADD BOOK
          </NavLink>
        </div>

        <div className="flex mt-5 mb-2 text-sm justify-between">
          <div className="flex">
            <NavLink>
              <p>All ({TotalBooks})</p>
            </NavLink>
            <p className="mx-2">|</p>
            <NavLink to={"/alltrashbooks"}>
              <p className="text-red-500">Trash</p>
            </NavLink>
          </div>
        </div>

        <div className="flex">
          <div className="shadow-lg w-full h-min">
            <table className="text-gray-500 w-full">
              <thead className="text-md text-gray-700 bg-gray-100">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Thumbnail
                  </th>
                  <th scope="col" className="px-4 py-3 cursor-pointer">
                    PDF
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Author
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Download
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Date & Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.length > 0
                  ? rows.map((e, idx) => {
                      let flag = 0;

                      return (
                        <>
                          <tr
                            key={e.id}
                            className="text-center border-b border-gray-300 group align-top"
                          >
                            <td className="pb-3">
                              {e.book_thumbnail != "" ? (
                                // <img
                                //   src={`./uploads/Books/PDF/${e.book_thumbnail}`}
                                //   style={{ height: "50px", width: "50px" }}
                                // />
                                "fvfd"
                              ) : (
                                <p>Not Found</p>
                              )}
                            </td>
                            <td>
                              {e.book_pdf != "" ? "tyhy" : <p>Not Found</p>}
                            </td>
                            <td>
                              {e.book_title}
                              <p
                                className="p-0 m-0 tred "
                                style={{ fontSize: "14px" }}
                              >
                                <div className="flex">
                                  <Link to={`/editbook/${e.id}`}>
                                    <p>&nbsp;Edit | </p>
                                  </Link>
                                  <p
                                    className="text-red-500"
                                    onClick={() => {
                                      trashBooks(e.id);
                                    }}
                                  >
                                    &nbsp;Trash
                                  </p>
                                </div>
                              </p>
                            </td>
                            <td> {e.book_author}</td>
                            <td>{e.book_description}</td>
                            <td>
                              {e.book_isdownload == 0 ? <p>No</p> : <p>Yes</p>}
                            </td>

                            <td>
                              {BookCategory.map((x) => {
                                if (e.books_category === x.id) {
                                  flag = 1;
                                  return x.category_name;
                                }
                              })}
                              {flag === 0 ? "null" : ""}
                            </td>
                            <td>
                              <p>{e.upload_date}</p>
                              <p>{e.book_publish_time}</p>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
