// update
import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app"; // Import Firebase
import "firebase/compat/storage"; // Import Firebase storage module

const EditEventPage = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({
    imageUrl: "",
    EventName: "",
    Description: "",
    Date: "",
    Time: "",
    Location: "",
    Category: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
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
        if (eventData.imageUrl) {
          // If an image already exists, replace it with the new one
          setEventData({ ...eventData, imageUrl: url });
        } else {
          // If no image exists, set the new image URL
          setEventData((prevData) => ({ ...prevData, imageUrl: url }));
        }
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

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`http://localhost:5012/events/${eventId}`);
        if (response.status === 200) {
          setEventData(response.data);
        } else {
          setError("Failed to fetch event data");
        }
      } catch (error) {
        setError("Failed to fetch event data");
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      let formData = {
        EventName: eventData.EventName,
        Description: eventData.Description,
        Date: eventData.Date,
        Time: eventData.Time,
        Location: eventData.Location,
        Category: eventData.Category,
      };

      if (!eventData.imageUrl) {
        alert("Please select an image");
        setSubmitting(false);
        return;
      }

      if (eventData.imageUrl) {
        formData = { ...formData, imageUrl: eventData.imageUrl };
      }

      await axios.put(`http://localhost:5012/events/${eventId}`, formData);
      console.log("Event updated successfully");
      setUpdateError(null);
      window.alert("Event updated successfully"); // Show alert message
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      setUpdateError(`Failed to update event: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="absolute ml-[320px] top-[110px] w-[1120px]">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card className="bg-[#f0a70a22] h-[1400px]">
          <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
            <Typography variant="h5" color="white">

              MANAGE RENTALS
            </Typography>
          </CardHeader>
          <CardBody className="px-0 pt-0 pb-2 mx-[60px]">
            <div className="h-screen flex">
              <div className="max-w-md bg-white border rounded-xl h-fit shadow-lg mx-auto my-auto justify-center">
                <div className="p-5">
                  <h2 className="text-4xl font-Satisfy text-center font-bold mb-4">
                    Edit Event
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="imageUrl" className="block mb-1">
                        Image URL:
                      </label>
                      {eventData.imageUrl ? (
                        <img src={eventData.imageUrl} alt="Event" className="mb-2" style={{ maxWidth: "100%" }} />
                      ) : (

                        <input
                          type="file"
                          id="imageUrl"
                          name="imageUrl"
                          onChange={handleFileUpload}
                          className="border rounded-md px-3 py-2"
                          required
                        />
                      )}
                    </div>
                    {/* Input fields */}
                    <div>
                      <label htmlFor="EventName" className="block mb-1">
                        Event Name:
                      </label>
                      <input
                        type="text"
                        id="EventName"
                        name="EventName"
                        value={eventData.EventName}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="Description" className="block mb-1">
                        Description:
                      </label>
                      <textarea
                        id="Description"
                        name="Description"
                        value={eventData.Description}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="Date" className="block mb-1">
                        Date:
                      </label>
                      <input
                        type="date"
                        id="Date"
                        name="Date"
                        value={eventData.Date}
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
                        value={eventData.Time}
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
                        value={eventData.Location}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="Category" className="block mb-1">
                        Category:
                      </label>
                      <input
                        type="text"
                        id="Category"
                        name="Category"
                        value={eventData.Category}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2"
                        required
                      />
                    </div>
                    <button type="submit" className="bg-[#008000] text-white rounded-md px-4 py-2" disabled={submitting}>
                      Update Event
                    </button>
                    {updateError && <div className="text-red-500">{updateError}</div>}
                  </form>
                  <br />
                  <Link to="/admin/events">
                    <button className="bg-[#008000] text-white rounded-md px-4 py-2">Back to Home</button>
                  </Link>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

      </div>
    </div>
  );
};

export default EditEventPage;
