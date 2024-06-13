/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import { Article } from "../Article";
import "./style.css";
import React, { useEffect, useState } from "react";
import { SimpleGrid, Stack } from "@mantine/core";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { BlogCard, RootState } from "@etlyn/control-x";

export const BlogSection = ({ isMob, className, titleClassName }) => {
  const navigate = useNavigate();
  const { blogs } = useSelector((state) => state.blogs);

  const [device, setDevice] = useState("web");

  useEffect(() => {
    if (window.screen.width < 768) {
      setDevice("mob");
    }
  }, []);

  return (
    <div className={`blog-section ${className}`}>
      <div className={`title-4 ${titleClassName}`}>
        გაეცანი მიწის აზომვასთან
        <br />
        დაკავშირებულ სიახლეებს
      </div>
      <SimpleGrid cols={device === "web" ? 3 : 1}>
        {blogs
          .filter((blog) => blog.published)
          .map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              text={blog.content}
              onClick={() => {
                navigate(`/blogs/${blog.id}`);
              }}
              imgURL={blog.cover_image_url}
            />
          ))}
      </SimpleGrid>
    </div>
  );
};

BlogSection.propTypes = {
  articleText: PropTypes.string,
  articleImage: PropTypes.string,
  articleImg: PropTypes.string,
  articleImage1: PropTypes.string,
};
