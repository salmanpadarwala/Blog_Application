import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PORT from '../../assets/constant/Url';

const BookView = () => {
  const location = useLocation();
  const [bookId, setBookId] = useState(location.state.id);
  const [viewBook, setViewBook] = useState();

  useEffect(() => {
    getBookDViewata(); 
  }, [])

  const getBookDViewata = async () => {
    try {
      const res = await axios.get(`${PORT}getbookviewdetail/${bookId}`);
      setViewBook(res.data[0]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className='w-full'>
        <div className='w-4/5 flex mt-10 mx-auto'>
          <div className='view-book-side-section'>
            <img src={require('../../assets/image/book-view-page.webp')} alt="" className='view-book-side-image' />
          </div>
          <div className='view-book-left-section'>
            <p className='book-view-image-title'>سیکورٹی تجزیہ: چھٹا ایڈیشن، وارن بفیٹ کا پیش لفظ</p>
            <div className='flex justify-between'>
              <p className='author-book-name'><span className='font-bold'>مصنف :-</span>وارن بفیٹ</p>
              <p className='author-book-name'><span className='font-bold'>اشاعت کی تاریخ :-</span>2005-05-15</p>
            </div>
            <p className='view_news_content p-5'>Lorem Ipsum کی صنعت کی معیاری ڈمی ایک نامعلوم پرنٹر قسم کی ایک گیلی لیا اور Lorem Ipsum صرف پرنٹنگ اور typesetting صنعت کے ڈمی متن ہے جب 1500s کے بعد سے کبھی متن کیا گیا ہے Lorem Ipsum کی صنعت کی معیاری ڈمی ایک نامعلوم پرنٹر قسم کی ایک گیلی لیا اور Lorem Ipsum صرف پرنٹنگ اور typesetting صنعت کے ڈمی متن ہے جب 1500s کے بعد سے کبھی متن کیا گیا ہے Lorem Ipsum کی صنعت کی معیاری ڈمی ایک نامعلوم پرنٹر قسم کی ایک گیلی لیا اور Lorem Ipsum صرف پرنٹنگ اور typesetting صنعت کے ڈمی متن ہے جب 1500s کے بعد سے کبھی متن کیا گیا ہے Lorem Ipsum کی صنعت کی معیاری ڈمی ایک نامعلوم پرنٹر قسم کی ایک گیلی لیا اور Lorem Ipsum صرف پرنٹنگ اور typesetting صنعت کے ڈمی متن ہے جب 1500s کے بعد سے کبھی متن کیا گیا ہے Lorem Ipsum کی صنعت کی معیاری ڈمی ایک نامعلوم پرنٹر قسم کی ایک گیلی لیا اور Lorem Ipsum صرف پرنٹنگ اور typesetting صنعت کے ڈمی متن ہے جب 1500s کے بعد سے کبھی متن کیا گیا ہے Lorem Ipsum کی صنعت کی معیاری ڈمی ایک نامعلوم پرنٹر قسم کی ایک گیلی لیا اور Lorem Ipsum صرف پرنٹنگ اور typesetting صنعت کے ڈمی متن ہے جب 1500s کے بعد سے کبھی متن کیا گیا ہے Lorem Ipsum کی صنعت کی معیاری ڈمی ایک نامعلوم پرنٹر قسم کی ایک گیلی لیا اور Lorem Ipsum صرف پرنٹنگ اور typesetting صنعت کے ڈمی متن ہے جب 1500s کے بعد سے کبھی متن کیا گیا ہے Lorem Ipsum کی صنعت کی معیاری ڈمی ایک نامعلوم پرنٹر قسم کی ایک گیلی لیا اور Lorem Ipsum صرف پرنٹنگ اور typesetting صنعت کے ڈمی متن ہے جب 1500s کے بعد سے کبھی متن کیا گیا ہے Lorem Ipsum کی صنعت کی معیاری ڈمی ایک نامعلوم پرنٹر قسم کی ایک گیلی لیا اور Lorem Ipsum صرف پرنٹنگ اور typesetting صنعت کے ڈمی متن ہے جب 1500s کے بعد سے کبھی متن کیا گیا ہے Lorem Ipsum کی صنعت کی معیاری ڈمی ایک نامعلوم پرنٹر قسم کی ایک گیلی لیا اور Lorem Ipsum صرف پرنٹنگ اور typesetting صنعت کے ڈمی متن ہے جب 1500s کے بعد سے کبھی متن کیا گیا ہے Lorem Ipsum کی صنعت کی معیاری ڈمی ایک نامعلوم پرنٹر قسم کی ایک گیلی لیا اور Lorem Ipsum صرف پرنٹنگ اور typesetting صنعت کے ڈمی متن ہے جب 1500s کے بعد سے کبھی متن کیا گیا ہے Lorem Ipsum کی صنعت کی معیاری ڈمی ایک نامعلوم پرنٹر قسم کی ایک گیلی لیا اور Lorem Ipsum صرف پرنٹنگ اور typesetting صنعت کے ڈمی متن ہے جب 1500s کے بعد سے کبھی متن کیا گیا ہے Lorem Ipsum کی صنعت کی معیاری ڈمی ایک نامعلوم پرنٹر قسم کی ایک گیلی لیا اور Lorem Ipsum صرف پرنٹنگ اور typesetting صنعت کے ڈمی متن ہے جب 1500s کے بعد سے کبھی متن کیا گیا ہے </p>
            <p>Views :-</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookView
