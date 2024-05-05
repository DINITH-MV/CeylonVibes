import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { Link, useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";

const AddArticleForm = () => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

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
    if (description.length > 2000) {
      alert("Description cannot exceed 2000 characters");
      return;
    }
    try {
      const response = await fetch("http://localhost:7000/api/articles", {
        method: "POST",
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
        alert("Article added successfully");
        navigate("/view-admin-article");
        // Optionally, reset the form fields
        setTitle("");
        setAuthor("");
        setDescription("");
        setCategory("");
        setImageUrl(null);
      } else {
        throw new Error(data.message || "Failed to add article");
      }
    } catch (error) {
      console.error("Error adding article:", error);
      alert("Failed to add article. Please try again.");
    }
  };

  return (
    <div className="absolute ml-[320px] top-[110px] w-[1120px]">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card className="bg-[#fff1ed]">
          <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
            <Typography variant="h5" color="white">
              
              ADD AN ARTICLE
            </Typography>
          </CardHeader>
          <CardBody className=" px-0 pt-0  h-[700px]">
            <div style={{ minHeight: '100vh', padding: 40 }} >
              <div className=" w-fit border rounded-xl shadow-lg mx-auto my-auto justify-center bg-[#fff]">
                <div className="p-5 ">
                  <h2 className="text-4xl font-Satisfy text-center font-bold mb-4">
                    Add Article
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4 flex">
                    <div>
                      <div className="flex">
                        <div>
                          <label htmlFor="image" className="block mb-1">
                            Image:
                          </label>
                          <input
                            type="file"
                            id="image"
                            required
                            onChange={handleFileUpload}
                            accept="image/*"
                            className="border rounded p-2 w-full"
                          />
                          <img src={imageUrl} className="w-96 h-auto" alt="" />
                          {loading ? (
                            <p className="text-pretty">Uploading image...</p>
                          ) : (
                            ""
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
                              required
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
                              required
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
                              required
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
                            <label htmlFor="description" className="block mb-1 h-">
                              Description:
                            </label>
                            <textarea
                              id="description"
                              required
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              className="border rounded p-2 w-full"
                            />
                          </div>
                          <div className="flex justify-between mt-5">
                            <button
                              type="submit"
                              className="bg-tahiti text-black border px-4 py-2 rounded hover:bg-blue-600"
                            >
                              Add Article
                            </button>
                            <Link to="/admin-view">
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
          </CardBody>
        </Card>

      </div>
    </div>
  );
};

export default AddArticleForm;
