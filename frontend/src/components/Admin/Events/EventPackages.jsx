import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "@/pages/Admin Dashboard/Events/EventReport";
import { motion } from "framer-motion";

const EventPack = () => {
  // save the data to the array named events
  const [events, setEvents] = useState([]);

  //retrive data from the database
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5012/events/music");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="absolute ml-[320px] top-[110px] w-[1120px]">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
            <Typography variant="h5" color="white">
              <PDFDownloadLink className='ml-[880px] mt-[-10px] rounded-[7px] mx-auto absolute bg-[#a0803b]' document={<PDFFile items={events} />} fileName="event_table.pdf">
                {({ loading }) => (loading ? <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'><motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 1 / 10,
                  }}>Preparing...</motion.button></button> : <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'>Monthly Report</button>)}
              </PDFDownloadLink>
              MANAGE EVENTS
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 mx-[60px]">
            <div className="pt-[120px] flex flex-col items-center justify-center min-h-screen bg-gray-100">
              <div className="flex justify-center mb-4">
                <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
                  Music Events
                </button>
                <Link to={"/Sport"}>
                  <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
                    Sports Events
                  </button>
                </Link>
                <Link to={"/Festival"}>
                  <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded mr-4">
                    Festival Events
                  </button>
                </Link>
                <Link to={"/Food"}>
                  <button className="bg-[#9d6262d3] text-Black font-bold py-2 px-4 rounded">
                    Food Events
                  </button>
                </Link>
              </div>
              {/* borders */}
              <div className="flex flex-wrap justify-center">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="w-96 h-[600px] p-4 m-4 border border-gray-300 rounded-md flex flex-col justify-between"
                    style={{ maxWidth: "5555px", maxHeight: "900px" }}
                  >
                    <h2 className="text-lg font-bold mb-2">{event.EventName}</h2>
                    <img
                      src={event.imageUrl}
                      alt={event.EventName}  //if image not run
                      className="w-full h-[200px] object-cover mb-2"
                    />
                    <p className="text-sm mb-2">{event.Description}</p>
                    <p className="text-sm mb-2 font-bold">Date: {event.Date}</p>
                    <p className="text-sm mb-2 font-bold">Time: {event.Time}</p>
                    <p className="text-sm mb-2 font-bold">Location: {event.Location}</p>
                    <p className="text-sm mb-2 font-bold">Category: {event.Category}</p>
                    <Link to={`/Payment/${event._id}`}>
                      <button className="bg-[#879d62] text-Black font-bold py-2 px-4 rounded">
                        Buy Ticket
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>

      </div>
    </div>
  );
}

export default EventPack;
