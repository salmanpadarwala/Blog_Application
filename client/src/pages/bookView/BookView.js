import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PORT from '../../assets/constant/Url';

function BookView() {
  const location = useLocation();
  const [bookId, setBookId] = useState(location.state ? location.state.id : null);
  const [viewBook, setViewBook] = useState([]);
  const [selectedTab, setSelectedTab] = useState('details');

  useEffect(() => {
    if (bookId) {
      getBookData();
    }
  }, [bookId]);

  const getBookData = async () => {
    try {
      const res = await axios.get(`${PORT}getbookviewdetail/${bookId}`);
      setViewBook(res.data[0]);
      console.log(res.data[0])
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className='book_main_tabs'>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="mr-2">
            <button
              onClick={() => setSelectedTab('details')}
              className={`inline-block p-4 ${selectedTab === 'details' ? 'text-blue-600 bg-gray-100' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg`}
            >
              تفصیل کتاب
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => setSelectedTab('reading')}
              className={`inline-block p-4 ${selectedTab === 'reading' ? 'text-blue-600 bg-gray-100' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'} rounded-t-lg`}
            >
              مطالعہ
            </button>
          </li>
        </ul>
      </div>


      {selectedTab === 'details' && (
        <div className="details-content">

          <h2>{viewBook.book_title}</h2>
          <img
            src={`../../upload/${viewBook.book_thumbnail}`}
            alt="news"
            className=""
          />
          {/* Add more details here */}
        </div>
      )}

      {selectedTab === 'reading' && (
        <div className="reading-content">
          {/* Render the reading content here */}
          <p>This is the reading content.</p>
        </div>
      )}
    </>
  );
}

export default BookView;
