import React from "react";
import HomeRoute from "./routes/HomeRoute";
import LoginRoute from "./routes/admin/LoginRoute";
import DashRoute from "./routes/admin/DashRoute";
import BlogCateRoute from "./routes/admin/BlogCateRoute";
import BlogPostRoute from "./routes/admin/BlogPostRoute";

const App = () => {
  return (
    <>
      <HomeRoute />
      <LoginRoute />
      <DashRoute />
      <BlogCateRoute />
      <BlogPostRoute />
    </>
  );
};

export default App;
