import React, { useEffect, useState } from "react";
import { SimpleGrid, Stack } from "@mantine/core";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { BlogCard, RootState } from "@etlyn/control-x";
import { Layout } from "../../components/Layout";

function BlogList() {
  const navigate = useNavigate();
  const { blogs } = useSelector((state: RootState) => state.blogs);

  const [device, setDevice] = useState("web");

  useEffect(() => {
    if (window.screen.width < 768) {
      setDevice("mob");
    }
  }, []);

  return (
    <Layout>
      <Stack
        style={{
          marginLeft: device === "web" ? 140 : 32,
          marginRight: device === "web" ? 140 : 32,
          marginTop: 100,
          paddingBottom: 200,
        }}
      >
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
      </Stack>
    </Layout>
  );
}

export default BlogList;
