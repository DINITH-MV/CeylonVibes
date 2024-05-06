
import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Font, StyleSheet, View, Text, Page, Document, Image } from "@react-pdf/renderer";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { motion } from "framer-motion";

// Font registration
Font.register({
  family: 'Spirax',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/spirax/v21/buE3poKgYNLy0F3cXktt-Csn-Q.ttf' },
    {
      src: 'https://fonts.gstatic.com/s/spirax/v21/buE3poKgYNLy0F3cXktt-Csn-Q.ttf',
      fontWeight: 'bold',
    },
    {
      src: 'https://fonts.gstatic.com/s/spirax/v21/buE3poKgYNLy0F3cXktt-Csn-Q.ttf',
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  ]
});

Font.register({
  family: 'Chivo',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/chivo/v18/va9b4kzIxd1KFppkaRKvDRPJVDf_vB_ul2DSFXjQiQ.ttf' },
    {
      src: 'https://fonts.gstatic.com/s/chivo/v18/va9Z4kzIxd1KFrBtW-13ZHhT-jDqdFwG1GrWN33AiasJ.ttf',
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  ]
});

// Styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#dddad1",
  },
  logo: {
    marginTop: 20,
    marginLeft: 80,
    padding: 5,
    position: "absolute",
    fontFamily: "Spirax",
    fontSize: 21,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  report: {
    paddingTop: 30,
    paddingLeft: 590,
    position: "absolute",
    fontFamily: "Chivo",
    fontSize: 14,
  },
  period: {
    paddingTop: 50,
    paddingLeft: 550,
    position: "absolute",
    fontFamily: "Chivo",
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    paddingTop: 73,
    marginBottom: 10,
    fontFamily: "Chivo",
  },
  table: {
    tableLayout: "fixed",
    marginHorizontal: "auto",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  tableHeader: {
    marginLeft: "2px",
    marginBottom: "2px",
    borderStyle: "solid",
    borderColor: "#000000",
    padding: 5,
    fontSize: 12,
    width: "120px",
    height: "32px",
    backgroundColor: "#F6F193",
    color: "#000",
    textAlign: "center",
    fontFamily: "Chivo",
  },
  tableHeaderDescription: {
    marginLeft: "2px",
    marginBottom: "2px",
    borderStyle: "solid",
    borderColor: "#000000",
    padding: 5,
    fontSize: 12,
    width: "200px",
    height: "32px",
    backgroundColor: "#F6F193",
    color: "#000",
    textAlign: "center",
    fontFamily: "Chivo",
  },
  tableHeaderView: {
    marginLeft: "2px",
    marginBottom: "2px",
    borderStyle: "solid",
    borderColor: "#000000",
    padding: 5,
    fontSize: 12,
    width: "60px",
    height: "32px",
    backgroundColor: "#F6F193",
    color: "#000",
    textAlign: "center",
    fontFamily: "Chivo",
  },
  cell: {
    marginLeft: "2px",
    marginBottom: "2px",
    borderStyle: "solid",
    borderColor: "#000000",
    padding: 5,
    fontSize: 12,
    width: "120px",
    height: "100px",
    backgroundColor: "#FBF3D5",
  },
  image: {
    marginLeft: "2px",
    marginBottom: "2px",
    borderStyle: "solid",
    borderColor: "#000000",
    backgroundColor: "#FBF3D5",
    padding: 5,
    fontSize: 12,
    width: "120px",
    height: "100px",
    paddingHorizontal: "55px",
    paddingVertical: "10px",
  },
  description: {
    marginLeft: "2px",
    marginBottom: "2px",
    borderStyle: "solid",
    borderColor: "#000000",
    padding: 5,
    fontSize: 12,
    width: "200px",
    height: "100px",
    backgroundColor: "#FBF3D5",
  },
  view: {
    marginLeft: "2px",
    marginBottom: "2px",
    borderStyle: "solid",
    borderColor: "#000000",
    padding: 5,
    fontSize: 12,
    width: "60px",
    height: "100px",
    backgroundColor: "#FBF3D5",
  }
});

// PDF File Component
const PDFFile = ({ items }) => (
  <Document>
    <Page size="A3" style={styles.page}>
      <Text style={styles.logo}>Ceylon Vibes</Text>
      <Text style={styles.report}>Monthly Report</Text>

      <Text style={styles.title}>Events Report</Text>
      <View style={styles.table}>
        <View style={styles.row}>


          <Text style={styles.tableHeader}>Event Name</Text>

          <Text style={styles.tableHeader}>Date</Text>

          <Text style={styles.tableHeader}>Location</Text>
          <Text style={styles.tableHeader}>Category</Text>

        </View>
        {items.map((event, index) => (
          <View key={index} style={styles.row}>

            <Text style={styles.cell}>{event.EventName}</Text>

            <Text style={styles.cell}>{event.Date}</Text>

            <Text style={styles.cell}>{event.Location}</Text>
            <Text style={styles.cell}>{event.Category}</Text>

          </View>
        ))}
      </View>
    </Page>
  </Document>
);

// Event Table Component
const EventTable = ({ events, onDelete }) => {
  return (
    <div className="container mx-auto p-5 mt-[-25px]">
      <h2 className="text-[18pt] font-bold mb-4 text-center">Events</h2>
      <Link to="/admin/addevent">
        <button className="pl-2 pr-2 pt-2 pb-[10px] mb-[20px] text-[#fff] border-none rounded-[7px] w-full font-semibold bg-greenNa hover:bg-green">
          Add Events
        </button>
      </Link>
      <table className="min-w-full rounded-xl overflow-hidden">
        <thead className="bg-yellowDr">
          <tr>
            <th className="border px-4 py-2 text-left">Image</th>
            <th className="border px-4 py-2 text-left">Event Name</th>
            <th className="border px-4 py-2 text-left">Description</th>
            <th className="border px-4 py-2 text-left">Date</th>
            <th className="border px-4 py-2 text-left">Time</th>
            <th className="border px-4 py-2 text-left">Location</th>
            <th className="border px-4 py-2 text-left">Category</th>
            <th className="border px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {events.length === 0 && (
            <tr>
              <td colSpan="8" className="border px-4 py-2 text-center">No events available</td>
            </tr>
          )}
          {events.map((event) => (
            <tr key={event._id} className="bg-white hover:bg-yellow">
              <td className="border px-4 py-2">
                <img src={event.imageUrl} alt="Event" className="w-24 h-auto rounded-md" />
              </td>
              <td className="border px-4 py-2">{event.EventName}</td>
              <td className="border px-4 py-2">{event.Description.substring(0, 200)}</td>
              <td className="border px-4 py-2">{event.Date}</td>
              <td className="border px-4 py-2">{event.Time}</td>
              <td className="border px-4 py-2">{event.Location}</td>
              <td className="border px-4 py-2">{event.Category}</td>
              <td className="border px-4 py-2 flex flex-col">
                <button className="pl-2 pr-2 pt-2 pb-2 border-none font-semibold mb-2 transition-colors w-full 
                duration-300 rounded-xl bg-[#FF0000] hover:bg-lightRed" onClick={() => onDelete(event._id)}>
                  Delete
                </button>
                <Link to={`/admin/editevent/${event._id}`}>
                  <button className="pl-2 pr-2 pt-2 pb-2 border-none rounded-xl w-full font-semibold bg-greenNa hover:bg-green">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// EventseditPage Component
const EventseditPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5557/events");
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Failed to fetch events");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Handle Event Deletion
  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:5557/events/${eventId}`);
      setEvents((prevEvents) => prevEvents.filter((event) => event._id !== eventId));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

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
            <div className="container mx-auto p-5">
              {loading && <div className="text-center">Loading...</div>}
              {error && <div className="text-center text-red-500">{error}</div>}
              <EventTable events={events} onDelete={handleDeleteEvent} />

            </div>
          </CardBody>
        </Card>

      </div>
    </div>
  );
};

export default EventseditPage;
