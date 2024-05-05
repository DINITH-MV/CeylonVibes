import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { Link, useParams, useNavigate } from "react-router-dom";

const UpdateArticleForm = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/articles/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch article details");
        }
        const data = await response.json();
        const article = data.article;
        setTitle(article.title);
        setAuthor(article.author);
        setDescription(article.description);
        setCategory(article.category);
        setImageUrl(article.imageUrl);
      } catch (error) {
        console.error("Error fetching article details:", error);
      }
    };
    fetchArticleDetails();
  }, [id]);

  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(selectedFile.name);
      setLoading(true);
      try {
        const snapshot = await fileRef.put(selectedFile);
        const url = await snapshot.ref.getDownloadURL();
        console.log(url);
        setImageUrl(url);
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Failed to upload file. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      console.log("No file selected");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/articles/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl,
          title,
          author,
          description,
          category,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        alert("Article details updated successfully");
        navigate("/admin/articles");
      } else {
        throw new Error(data.message || "Failed to update article details");
      }
    } catch (error) {
      console.error("Error updating article details:", error);
      alert("Failed to update article details. Please try again.");
    }
  };

  return (
    <div className="w-screen h-full bg-[#f0a70a22] flex p-10">
      <div className=" bg-white border rounded-xl h-fit shadow-lg mx-auto my-auto justify-center">
        <div className="p-5">
          <h2 className="text-4xl font-Satisfy text-center font-bold mb-4">
            Update Article Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 flex">
            <div>
              <div className="flex">
                <div className="mr-5">
                  <label htmlFor="image" className="block mb-1">
                    Image:
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="border rounded p-2 w-full"
                  />
                  <img src={imageUrl} className="w-96 h-auto" alt="" />
                  {loading ? (
                    <p className="text-pretty">Uploading image...</p>
                  ) : (
                    <p className="text-green">Image Uploaded</p>
                  )}
                </div>
                <div className="ml-5">
                  <div>
                    <label htmlFor="title" className="block mb-1">
                      Title:
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="border rounded p-2 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="author" className="block mb-1">
                      Author:
                    </label>
                    <input
                      type="text"
                      id="author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="border rounded p-2 w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block mb-1">
                      Category:
                    </label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="border rounded p-2 w-full"
                    >
                      <option value="">Select Category</option>
                      <option value="Attractions and Landmarks">
                        Attractions and Landmarks
                      </option>
                      <option value="Natural Wonders">Natural Wonders</option>
                      <option value="Cultural Experience">
                        Cultural Experience
                      </option>
                      <option value="Historical Sites">Historical Sites</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <label htmlFor="description" className="block mb-1">
                      Description:
                    </label>
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="border rounded p-2 w-full h-32"
                    />
                  </div>
                  <div className="flex justify-between mt-5">
                    <button
                      type="submit"
                      className="bg-tahiti text-black border px-4 py-2 mr-3 rounded hover:bg-blue-600"
                    >
                      Update Article Details
                    </button>
                    <Link to="/view-admin-article">
                      <button className="bg-silver text-black border px-4 py-2 rounded hover:bg-BrownLi transition-colors duration-300">
                        Back
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateArticleForm;
