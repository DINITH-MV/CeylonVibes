import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { Link, useParams, useNavigate } from "react-router-dom";

const UpdateCarForm = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [maxPersons, setMaxPersons] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5555/api/cars/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch car details");
        }
        const data = await response.json();
        const car = data.car;
        setBrand(car.brand);
        setPrice(car.price);
        setFuelType(car.fuelType);
        setMaxPersons(car.maxPersons);
        setCategory(car.category);
        setImageUrl(car.imageUrl);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };
    fetchCarDetails();
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
      const response = await fetch(`http://localhost:5555/api/cars/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl,
          brand,
          price,
          fuelType,
          maxPersons,
          category,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        alert("Car details updated successfully");
        navigate("/admin/rentals");
      } else {
        throw new Error(data.message || "Failed to update car details");
      }
    } catch (error) {
      console.error("Error updating car details:", error);
      alert("Failed to update car details. Please try again.");
    }
  };

  return (
    <div className="absolute ml-[320px] top-[110px] w-[1120px]">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card className="bg-[#f0a70a22]">
          <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
            <Typography variant="h5" color="white">
              UPDATE CAR DETAILS
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 ">
            <div className=" h-screen flex ">
              <div className="max-w-md bg-white border rounded-xl h-fit shadow-lg mx-auto my-auto justify-center">
                <div className="p-5">
                  <h2 className="text-4xl font-Satisfy text-center font-bold mb-4">
                    Update Car Details
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
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
                    </div>
                    {loading ? (
                      <p className="text-pretty">Uploading image...</p>
                    ) : (
                      <p className="text-green">Image Uploaded</p>
                    )}
                    <div>
                      <label htmlFor="brand" className="block mb-1">
                        Brand Name:
                      </label>
                      <input
                        type="text"
                        id="brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="border rounded p-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="price" className="block mb-1">
                        Price:
                      </label>
                      <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border rounded p-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="fuelType" className="block mb-1">
                        Fuel Type:
                      </label>
                      <input
                        type="text"
                        id="fuelType"
                        value={fuelType}
                        onChange={(e) => setFuelType(e.target.value)}
                        className="border rounded p-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="maxPersons" className="block mb-1">
                        Maximum Persons:
                      </label>
                      <input
                        type="number"
                        id="maxPersons"
                        value={maxPersons}
                        onChange={(e) => setMaxPersons(e.target.value)}
                        className="border rounded p-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block mb-1">
                        Vehicle Category:
                      </label>
                      <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border rounded p-2 w-full"
                      >
                        <option value="">Select Category</option>
                        <option value="Car">Car</option>
                        <option value="Van">Van</option>
                        <option value="Bus">Bus</option>
                      </select>
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="submit"
                        className="bg-tahiti text-black border px-4 py-2 rounded hover:bg-blue-600"
                      >
                        Update Car Details
                      </button>
                      <Link to="/admin-view">
                        <button className="bg-silver text-black border px-4 py-2 rounded hover:bg-BrownLi transition-colors duration-300">
                          Back
                        </button>
                      </Link>
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

export default UpdateCarForm;
