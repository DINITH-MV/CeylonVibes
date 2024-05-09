import React from "react";
import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";

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
    fontSize: 25,
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
    width: "170px",
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
    width: "170px",
    height: "100px",
    backgroundColor: "#FBF3D5",
  },
  totalcal: {
    marginTop: 20,
    marginLeft: "2px",
    marginBottom: "2px",
    borderStyle: "solid",
    borderColor: "#000000",
    padding: 5,
    fontSize: 18,
    width: "340px",
    height: "32px",
    backgroundColor: "#27A1F0",
    color: "#000",
    textAlign: "center",
    fontFamily: "Chivo",
  },
});

const PDFFile = ({ items }) => {
  // Function to calculate total price
  const totalPriceSum = items.reduce((acc, item) => acc + item.totalPrice, 0);

  // Function to calculate total count
  const totalCount = items.reduce((acc, item) => acc + item.count, 0);

  // Function to split items into chunks of 4
  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  // Split items into chunks of 4
  const itemChunks = chunk(items, 4);

  return (
    <Document>
      {itemChunks.map((items, index) => (
        <Page key={index} size="A4" orientation="landscape" style={styles.page}>
          <Text style={styles.logo}>CeylonVibes</Text>
          <Text style={styles.report}>Monthly Report</Text>
          <Text style={styles.period}>For the period ended {new Date().toLocaleDateString()}</Text>
          <Text style={styles.title}>Bookings Report</Text>
          <View style={styles.totalcal}>
            <Text>Total Earnings from tours: {totalPriceSum}/=</Text>            
          </View>
          <View style={styles.totalcal}>
          <Text>Total Tickets booked: {totalCount}</Text>
          </View>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.tableHeader}>Tour_id</Text>
              <Text style={styles.tableHeader}>Date</Text>
              <Text style={styles.tableHeader}>Total price</Text>
              <Text style={styles.tableHeader}>Count</Text>
              <Text style={styles.tableHeader}>User_id</Text>
            </View>
            {items.map((item) => (
              <View key={item._id} style={styles.row}>
                <Text style={styles.cell}>{item.tourId}</Text>
                <Text style={styles.cell}>{item.date}</Text>   
                <Text style={styles.cell}>{item.totalPrice}</Text>   
                <Text style={styles.cell}>{item.count}</Text>   
                <Text style={styles.cell}>{item.userId}</Text>
              </View>
            ))}
          </View>
        </Page>
      ))}
    </Document>
  );
};

export default PDFFile;
