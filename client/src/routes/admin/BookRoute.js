import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../pages/admin/layout/Sidebar";
import AllBooks from "../../pages/admin/book/AllBooks";
import AddBooks from "../../pages/admin/book/AddBooks";

const BookRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="allbooks"
          element={
            <>
              <Sidebar />
              <AllBooks />
            </>
          }
        />
        <Route
          path="addbook"
          element={
            <>
              <Sidebar />
              <AddBooks />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default BookRoute;
