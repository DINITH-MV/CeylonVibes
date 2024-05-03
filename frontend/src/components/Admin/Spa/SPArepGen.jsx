import React, { useState } from 'react';
import jsPDF from 'jspdf';


const ReportGeneration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reportData, setReportData] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');

  const months = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleGenerateReport = () => {
    if (!selectedMonth) {
      setError('Please select a month.');
      return;
    }

    setIsLoading(true);

    fetch(`http://localhost:5555/appointmentSpa`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch appointment data');
        }
        return response.json();
      })
      .then((data) => {
        // Filter appointments for the selected month
        const filteredData = data.data.filter((appointment) => {
          const appointmentDate = new Date(appointment.date);
          return appointmentDate.getMonth() + 1 === parseInt(selectedMonth);
        });

        setReportData(filteredData);
        setError(null);

        // Generate PDF with filtered data
        generatePDF(filteredData);
      })
      .catch((error) => {
        console.error('Error fetching appointment data:', error.message);
        setError('Failed to fetch appointment data. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const generatePDF = (data) => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

     // Set background color for the entire page (beige)
  doc.setFillColor(245, 245, 220); // Beige background (adjust RGB values as needed)
  doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');

   // Define dimensions and styling for the white box
  const boxWidth = 60; // Width of the white box (adjust as needed)
  const boxHeight = 15; // Height of the white box (adjust as needed)
  const borderRadius = 5; // Border radius for rounded corners
  const boxX = 10; // X-coordinate for the white box
  const boxY = 8; // Y-coordinate for the white box

  // Draw the white box
  doc.setFillColor(255, 255, 255); // White color for the box background
  doc.roundedRect(boxX, boxY, boxWidth, boxHeight, borderRadius, borderRadius, 'F'); // Draw filled rounded rectangle (white box)
  
  // Add custom text ("CeylonVibes") inside the white box
  doc.setFont('Spirax'); // Set font to 'Spirax'
  doc.setFontSize(18); // Set font size to 18

  const text = 'CeylonVibes';
  const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
  const textX = boxX + (boxWidth - textWidth) / 2; // Center text horizontally within the box
  const textY = boxY + (boxHeight - 18) / 2 + 18 / 2; // Center text vertically within the box

  doc.setTextColor(0, 0, 0); // Set text color to black
  doc.text(text, textX, textY); // Add text inside the white box


    doc.setFont('helvetica', 'bold');
    doc.setFontSize(30);

    // Add space between title and top of the page
    const titleY = 40; // Adjust as needed
    doc.text('Monthly Report of SPA Appointments', 10, titleY);

    doc.setFont('times', 'normal');
    doc.setFontSize(12);

    let startY = titleY + 20; // Start drawing content below the title with added space
    const rowHeight = 18;
    const colWidth = 50; // Column width (adjust as needed)
    const maxRowsPerPage = Math.floor(doc.internal.pageSize.height / rowHeight) - 1;


    let currentPage = 1;
    let rowIndex = 0;

    const drawTableHeaders = () => {
      // Draw "Name" header with light gray background and black border
      doc.setFillColor(230, 230, 230); // Light gray background
      doc.setDrawColor(0); // Black border
      doc.rect(10, startY, colWidth, rowHeight, 'F');
      doc.setTextColor(0, 0, 0); // Set text color to black
      doc.text('Name', 15, startY + 8);

      // Draw "Service" header with black border (no background color)
      doc.setDrawColor(0); // Black border
      doc.setFillColor(230, 230, 230); // Light gray background
      doc.rect(60, startY, colWidth, rowHeight, 'F');
      doc.setTextColor(0, 0, 0); // Set text color to black
      doc.text('Service', 65, startY + 8);

      // Draw "Date" header with light gray background and black border
      doc.setFillColor(230, 230, 230); // Light gray background
      doc.setDrawColor(0); // Black border
      doc.rect(110, startY, colWidth, rowHeight, 'F');
      doc.setTextColor(0, 0, 0); // Set text color to black
      doc.text('Date', 115, startY + 8);

      // Draw "Email" header with light gray background and black border
      doc.setFillColor(230, 230, 230); // Light gray background
      doc.setDrawColor(0); // Black border
      doc.rect(160, startY, colWidth, rowHeight, 'F');
      doc.setTextColor(0, 0, 0); // Set text color to black
      doc.text('Email', 165, startY + 8);
    };



    const drawTextInBox = (text, x, y, maxWidth, lineHeight) => {
      const lines = doc.splitTextToSize(text, maxWidth);
      doc.text(lines, x, y);
    };

    drawTableHeaders();
    startY += rowHeight;

    data.forEach((appointment, index) => {
      if (rowIndex >= maxRowsPerPage) {
        doc.addPage();
        currentPage++;
        startY = 10;
        rowIndex = 0;
        drawTableHeaders();
        startY += rowHeight;
      }
      
      doc.rect(10, startY, colWidth, rowHeight);
      doc.text(appointment.name, 15, startY + 8);
      
      doc.setFillColor(230, 230, 230); // Light gray background
      doc.rect(60, startY, colWidth, rowHeight, 'F');
      doc.setTextColor(0, 0, 0);
      doc.rect(60, startY, colWidth, rowHeight);
      drawTextInBox(appointment.service, 65, startY + 8, colWidth - 10, rowHeight);

      doc.rect(110, startY, colWidth, rowHeight);
      doc.text(appointment.date, 115, startY + 8);

      doc.rect(160, startY, colWidth, rowHeight);
      doc.text(appointment.email, 165, startY + 8);

      startY += rowHeight;
      rowIndex++;

      if (rowIndex === maxRowsPerPage && index !== data.length - 1) {
        doc.addPage();
        currentPage++;
        startY = 10;
        rowIndex = 0;
        drawTableHeaders();
        startY += rowHeight;
      }
    });

    doc.save('appointment_report.pdf');
  };



  return (
    <div className="report-generation-page flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl text-black my-4 mb-8 mt-10 font-mono antialiased font-medium">Generate Reports</h2>
      <div className="report-form">
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="">Select Month</option>
          {months.map((month) => (
            <option key={month.value} value={month.value}>{month.label}</option>
          ))}
        </select>
        <button
          onClick={handleGenerateReport}
          disabled={isLoading || !selectedMonth}
          className={`bg-[#EF4444] hover:bg-[#B91C1C] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isLoading && 'opacity-50 cursor-not-allowed'}`}
        >
          {isLoading ? 'Generating...' : 'Generate Report'}
        </button>

        {error && <div className="text-red-500 mt-2">{error}</div>}

        {reportData && (
          <div className="mt-4">
            <h4 className="text-3xl text-black my-4 mb-8 mt-10 font-mono antialiased font-medium">
              All Appointment Data
            </h4>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">Name</th>
                  <th className="border border-gray-400 px-4 py-2">Service</th>
                  <th className="border border-gray-400 px-4 py-2">Date</th>
                  <th className="border border-gray-400 px-4 py-2">Email</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((appointment) => (
                  <tr key={appointment._id}>
                    <td className="border px-4 py-2">{appointment.name}</td>
                    <td className="border px-4 py-2">{appointment.service}</td>
                    <td className="border px-4 py-2">{appointment.date}</td>
                    <td className="border px-4 py-2">{appointment.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportGeneration;
