import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { Link } from "react-router-dom";
import PDFFile from "./ArticleReport";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { motion } from "framer-motion";

const AdminArticleList = () => {
  const [articlesWithViews, setArticlesWithViews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:7000/api/articles");
        if (!response.ok) {
          throw new Error("Failed to fetch article data");
        }
        const responseData = await response.json();
        const articlesData = responseData.articles;
        const viewCounts = {}; // Initialize an empty object to hold view counts
        // Fetch view counts for each article
        for (const article of articlesData) {
          const response = await axios.get(
            `http://localhost:7000/api/articles/${article._id}`
          );
          viewCounts[article._id] = response.data.article.views;
        }
        // Combine articles data with view counts
        const articlesWithViewsData = articlesData.map((article) => ({
          ...article,
          views: viewCounts[article._id] || 0, // Use the fetched view count or default to 0
        }));
        setArticlesWithViews(articlesWithViewsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching article data:", error);
        setError(error.message || "Failed to fetch article data");
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/api/articles/${id}`);
      setArticlesWithViews((prevArticles) =>
        prevArticles.filter((article) => article._id !== id)
      );
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  if (error) {
    return <div className="text-center mt-4">Error: {error}</div>;
  }

  return (
    <div className="absolute ml-[320px] top-[110px] w-[1120px]">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
            <Typography variant="h5" color="white">
              <PDFDownloadLink className='ml-[880px] mt-[-10px] rounded-[7px] mx-auto absolute bg-[#a0803b]' document={<PDFFile items={articlesWithViews} />} fileName="article_table.pdf">
                {({ loading }) => (loading ? <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'><motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 1 / 10,
                  }}>Preparing...</motion.button></button> : <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'>Monthly Report</button>)}
              </PDFDownloadLink>
              MANAGE ARTICLES
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 mx-[60px]">
            <div className="container mx-auto p-5">
            <h2 className="text-[18pt] font-bold mb-4 text-center">ARTICLE LIST</h2>
                <Link to="/admin/add-article">
                <button className="pl-2 pr-2 pt-2 pb-[10px] mb-[20px] text-[#fff] border-none rounded-[7px] w-full font-semibold bg-greenNa hover:bg-green">
                    Add an Article
                  </button>
                </Link>
              <table className="min-w-full rounded-xl overflow-hidden">
                <thead className="bg-yellowDr">
                  <tr>
                    <th className="border px-4 py-2 text-left">Image</th>
                    <th className="border px-4 py-2 text-left">Title</th>
                    <th className="border px-4 py-2 text-left">Author</th>
                    <th className="border px-4 py-2 text-left">Description</th>
                    <th className="border px-4 py-2 text-left">Category</th>
                    <th className="border px-4 py-2 text-left">Views</th>
                    <th className="border px-4 py-2 text-left">Action</th>

                  </tr>
                </thead>
                <tbody>
                  {articlesWithViews.map((article) => (
                    <tr key={article._id} className="bg-white hover:bg-yellow">
                      <td className="border px-4 py-2 ">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-24 h-auto rounded-md"
                        />
                      </td>
                      <td className="border px-4 py-2">{article.title}</td>
                      <td className="border px-4 py-2">{article.author}</td>
                      <td className="border px-4 py-2">{article.description.substring(0, 300)}</td>
                      <td className="border px-4 py-2">{article.category}</td>
                      <td className="border px-4 py-2">{article.views}</td>
                      <td className="border px-4 py-2">
                        <button
                          className="pl-2 pr-2 pt-2 pb-2 border-none font-semibold mb-2 transition-colors w-full duration-300 rounded-xl  bg-red hover:bg-lightRed"
                          onClick={() => handleDelete(article._id)}
                        >
                          Delete
                        </button>
                        <Link to={`/admin/update-article/${article._id}`}>
                          <button className="pl-2 pr-2 pt-2 pb-2 text-[#fff] border-none rounded-xl w-full font-semibold bg-greenNa hover:bg-green">
                            Update
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>

      </div>
    </div>
  );
};

export default AdminArticleList;
