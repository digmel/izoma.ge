import { Header } from "../../components/Header";
import { RootState, TextViewer } from "@etlyn/control-x";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../api";
import { Layout } from "../../components/Layout";

function BlogPost() {
  const { blogID } = useParams();
  const [data, setData] = useState<RootState["blogs"]["activeBlog"]>();

  useEffect(() => {
    API.get(`/blogs/${blogID}`)
      .then((res: any) => setData(res.data))
      .catch((err) => console.log("error", err));
  }, [blogID]);

  const [device, setDevice] = useState("web");

  useEffect(() => {
    if (window.screen.width < 768) {
      setDevice("mob");
    }
  }, []);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          gap: "48px",
          marginLeft: device === "web" ? 140 : 32,
          marginRight: device === "web" ? 140 : 32,
          marginTop: 100,
          paddingBottom: 200,
        }}
      >
        <img src={data?.cover_image_url} />
        <h1>{data?.title}</h1>
        <div style={{ marginTop: "24px" }}>
          <TextViewer htmlContent={data?.content} />
        </div>
      </div>
    </Layout>
  );
}

export default BlogPost;
