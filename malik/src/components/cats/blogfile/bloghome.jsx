import Head from "../../header/header/head";
import Footer from "../../footer/footer";
import BlogPost from "./blog";

const BlogHome = () => {
  return (
    <div className="flex flex-col min-[100vh]">
      <Head />

      <main className="flex-grow ">
        <BlogPost />
      </main>

      <Footer />
    </div>
  );
};

export default BlogHome;
