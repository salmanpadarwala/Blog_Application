import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPost from "../../pages/admin/blogPost";
import Sidebar from "../../pages/admin/layout/Sidebar";
import AddBlog from "../../pages/admin/blogPost/AddBlog";
import EditBlog from "../../pages/admin/blogPost/EditBlog";

const BlogPostRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="allblogpost"
          element={
            <>
              <BlogPost />
            </>
          }
        />
        <Route
          path="addblogpost"
          element={
            <>
              <Sidebar />
              <AddBlog />
            </>
          }
        />
        <Route
          path="editblogpost/:id"
          element={
            <>
              <Sidebar />
              <EditBlog />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default BlogPostRoute;
