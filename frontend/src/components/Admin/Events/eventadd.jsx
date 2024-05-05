import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app"; // Import Firebase
import "firebase/compat/storage"; // Import Firebase storage module

const EventForm = () => {
  //create a array name formData 
  const [formData, setFormData] = useState({
    imageUrl: "",
    EventName: "",
    Description: "",
    Date: "",
    Time: "",
    Location: "",
    ticketPrice: "",
    Category: "",
  });

  const [loading, setLoading] = useState(false); // Define loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//send image to firebase to get the link
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
        setFormData({ ...formData, imageUrl: url }); // Update imageUrl in formData
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

//save to the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5557/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Event created successfully");
        setFormData({
          imageUrl: "",
          EventName: "",
          Description: "",
          Date: "",
          Time: "",
          Location: "",
          ticketPrice: "",
          Category: "",
        });
        console.log(response)
      } else {
        console.error("Failed to create event:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-screen h-screen bg-[#bc272722] flex ">
      <div className="max-w-md bg-white border rounded-xl h-fit shadow-lg mx-auto my-auto justify-center">
        <div className="p-5">
          <h2 className="text-4xl font-Satisfy text-center font-bold mb-4">
            Add Event
          </h2>
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
            </div>
            {loading ? <p className="text-pretty">Uploading image...</p> : ""}
            {/* Input fields */}
            <div>
              <label htmlFor="EventName" className="block mb-1">
                Event Name:
              </label>
              <input
                type="text"
                id="EventName"
                name="EventName"
                value={formData.EventName}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="Description" className="block mb-1">
                Description:
              </label>
              <input
            type="text"
            id="Description"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
            </div>
            <div>
              <label htmlFor="Date" className="block mb-1">
                Date:
              </label>
              <input
            type="date"
            id="Date"
            name="Date"
            value={formData.Date}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
            </div>
            <div>
              <label htmlFor="Time" className="block mb-1">
                Time:
              </label>
              <input
            type="time"
            id="Time"
            name="Time"
            value={formData.Time}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
            </div>
            <div>
              <label htmlFor="Location" className="block mb-1">
                Location:
              </label>
              <input
            type="text"
            id="Location"
            name="Location"
            value={formData.Location}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
            </div>
            <div>
              <label htmlFor="ticketPrice" className="block mb-1">
                Ticket Price:
              </label>
              <input
            type="number"
            id="ticketPrice"
            name="ticketPrice"
            value={formData.ticketPrice}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
            </div>
            <div>
              <label htmlFor="Category" className="block mb-1">
                Event Category:
              </label>
              <input
            type="text"
            id="Category"
            name="Category"
            value={formData.Category}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
                    <div className="flex justify-between">
              <button
                type="submit"
                className="bg-tahiti text-black border px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Add Event
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
  );
};

export default EventForm;
