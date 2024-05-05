import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import firebase from "firebase/compat/app"; // Import Firebase
import "firebase/compat/storage"; // Import Firebase storage module
import TourLogo from "../../components/Tours/TOURLOGO";

const CreateTours = () => {
  const [formData, setFormData] = useState({
    imageurl: "",
    title: "",
    price: "",
    description: "",
    Category: "",
    views: 0 // Initialize views here
  });

  const [loading, setLoading] = useState(false); // Define loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        setFormData({ ...formData, imageurl: url }); // Update image URL in formData
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
      const response = await fetch("http://localhost:5560/tours", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Event created successfully");
        setFormData({
          imageurl: "",
          title: "",
          price: "",
          description: "",
          Category: "",
          views: 0 // Reset views after successful submission
        });
      } else {
        console.error("Failed to create event:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div><TourLogo/>
    <div className="w-screen h-screen bg-green-400 flex ">
      
      <div className=" border rounded-xl h-fit shadow-lg mx-auto my-auto justify-center bg-slate-800">
        <div className="p-5">
          <h2 className="text-4xl font-Satisfy text-center font-bold mb-4 text-white">
            Add Tour
          </h2>
          <center><form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div>
              <label htmlFor="image" className="block mb-1 text-white">
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
            </div>
            {loading ? <p className="text-pretty">Uploading image...</p> : ""}
            {/* Input fields */}
            <div>
              <label htmlFor="title" className="block mb-1 text-white">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block mb-1 text-white">
                Price:
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-1 text-white">
                Description:
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="Category" className="block mb-1 text-white">
                Category:
              </label>
              <select  
                id="Category"
                name="Category"
                value={formData.Category}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
                required
              >
                <option value="">Select a category</option>
                <option value="hikes">Hikes</option>
                <option value="camping">Camping</option>
                <option value="heritage">Heritage</option>
                <option value="wildlife">Wildlife</option>
                <option value="beaches">Beaches</option>
              </select>
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-tahiti border px-4 py-2 rounded hover:bg-blue-600 text-white"
              >
                Add Tour
              </button>
              <Link to="/">
                <button className="bg-silver text-white border px-4 py-2 rounded hover:bg-BrownLi transition-colors duration-300">
                  Back
                </button>
              </Link>
            </div>
          </form></center>
          <Footer/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CreateTours;
