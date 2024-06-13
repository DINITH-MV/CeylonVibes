import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventHeader from './EventHeader';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ticketCount, setTicketCount] = useState(1);//to save count value
  const [standardPrice, setStandardPrice] = useState(0); // Initialize standardPrice state

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`http://localhost:5012/events/${id}`);
        if (response.status === 200) {
          setEventData(response.data);
          setStandardPrice(response.data.ticketPrice); // Set standardPrice from eventData
        } else {
          alert("Failed to fetch event data");
        }
      } catch (error) {
        alert("Failed to fetch event data");
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, [id]);
  // validation
  const handleTicketCountChange = (e) => {
    const count = parseInt(e.target.value);//convert text to number

    if (count > 5) {
      alert("Ticket count cannot exceed 5");

    }
    if (count < 0) {
      alert("Ticket count cannot be less than 0");
    }
    else {
      setTicketCount(count);
    }
  };


  const totalPrice = standardPrice * ticketCount;

  const handleSubmit = () => {
    //save values to variabals
    const data = { //create array name data
      User_ID: "lahiru",
      date: new Date().toISOString(),// to get today date
      TicketCount: ticketCount,
      value: totalPrice,
      status: "unpaid",
      Eventid: id
    };
    //pass the data array to database
    axios.post("http://localhost:5012/Ticket", data)
      .then(response => {
        console.log("Data saved successfully:", response.data);

      })
      .catch(error => {
        console.error("Error saving data:", error);
        // Handle any errors that occur during the save process
      });

  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex mx-[100px]">
      <div className="w-1/2 p-4">
        <img src={eventData.imageUrl} alt={eventData.EventName} className="w-[550px] h-[700px]" />
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-semibold mb-4">{eventData.EventName}</h2>
        <p className="mb-4">{eventData.Description}</p>
        <p className="font-bold mb-4">Location: {eventData.Location}</p>
        <p className="font-bold mb-4">Date: {eventData.Date}</p>
        <div className="mb-4"></div>
        <div className="mb-4">
          <label htmlFor="ticketCount" className="block font-semibold mb-2">Ticket Count</label>
          <input type="number" id="ticketCount" className="block w-full border border-gray-300 rounded p-2 
          focus:outline-none focus:border-blue-500" value={ticketCount} onChange={handleTicketCountChange} />
        </div>
        <div className="mb-4">
          <p className="font-bold mb-4">Ticket Price: {standardPrice}</p>
          <p className="font-semibold">Total Price: Rs.{totalPrice}.00</p>
        </div>
        <div>
          <button className="bg-[#75df44] hover:bg-blue-700 text-white font-bold py-2
           px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit}>
            <Link to="/">Buy Tickets</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
//payment page
const Payment = () => {
  const { id } = useParams();

  return (
    <div className="h-24 bg-[#eba5f1]">
      <EventHeader />
      <div className="pt-[100px] container mx-auto py-8">
        <EventDetails eventId={id} />
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
