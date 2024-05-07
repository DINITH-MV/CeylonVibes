import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsInfoCircle } from "react-icons/bs";

const AdminApp = () => {
  const [appointmentspa, setAppointmentSpa] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [appointmentToDelete, setAppointmentToDelete] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/appointmentSPA')
      .then((response) => {
        setAppointmentSpa(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [deleteSuccess]); // Refresh appointments list when deleteSuccess state changes

  const handleDeleteAppointment = (id) => {
    axios
      .delete(`http://localhost:5555/appointmentSPA/${id}`)
      .then((response) => {
        setAppointmentToDelete(null); // Reset appointmentToDelete
        setDeleteSuccess(true); // Trigger success message
      })
      .catch((error) => {
        console.log(error);
        // Handle error, e.g., show error message
      });
  };

  const showDeleteConfirmation = (id) => {
    setAppointmentToDelete(id);
    setShowConfirmation(true);
  };

  const confirmDeleteAppointment = () => {
    handleDeleteAppointment(appointmentToDelete);
    setShowConfirmation(false); // Close confirmation modal
  };

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='flex justify-center text-4xl text-black my-4 mb-8 mt-[-20px] font-mono antialiased font-medium'>SPA Appointment List</h1>
      </div>
        <div className="flex justify-center">
          <table className='w-[1300px] border-collapse'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='border bg-[#d0dcb2] px-4 py-2'>No</th>
                <th className='border bg-[#d0dcb2] px-4 py-2'>Full Name </th>
                <th className='border bg-[#d0dcb2] px-4 py-2 max-md:hidden'>Service </th>
                <th className='border bg-[#d0dcb2] px-4 py-2 max-md:hidden'>Time</th>
                <th className='border bg-[#d0dcb2] px-4 py-2 max-md:hidden'>Date</th>
                <th className='border bg-[#d0dcb2] px-4 py-2 max-md:hidden'>Mobile Number</th>
                <th className='border bg-[#d0dcb2] px-4 py-2 max-md:hidden'>Email</th>
                <th className='border bg-[#d0dcb2] px-4 py-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointmentspa.map((item, index) => (
                <tr key={item._id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className='border border-gray-400 px-4 py-2 text-center'>{index + 1}</td>
                  <td className='border border-gray-400 px-4 py-2'>{item.name}</td>
                  <td className='border border-gray-400 px-4 py-2 max-md:hidden'>{item.service}</td>
                  <td className='border border-gray-400 px-4 py-2 max-md:hidden'>{item.time}</td>
                  <td className='border border-gray-400 px-4 py-2 max-md:hidden'>{item.date}</td>
                  <td className='border border-gray-400 px-4 py-2 max-md:hidden'>{item.phoneNo}</td>
                  <td className='border border-gray-400 px-4 py-2 max-md:hidden'>{item.email}</td>
                  <td className='border border-gray-400 px-4 py-2 text-center'>
                    <div className='flex justify-center gap-x-4'>
                      <button
                        className='p-3 bg-[#DC2626] hover:bg-[#B91C1C] text-black font-bold py-2 px-4 rounded transition duration-200'
                        onClick={() => showDeleteConfirmation(item._id)}
                      >
                        Delete Appointment
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#F3F4F6] p-10 rounded shadow-md">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete this appointment?</p>
            <div className="flex justify-end">
              <button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-2 px-4 mr-2 rounded"
                onClick={confirmDeleteAppointment}
              >
                Yes, Delete
              </button>
              <button className="bg-[#9CA3AF] hover:bg-[#6B7280] text-black font-bold py-2 px-4 rounded"
                onClick={() => setShowConfirmation(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Success Message */}
      {deleteSuccess && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#047857] text-white p-4 text-center">
          Appointment deleted successfully!
        </div>
      )}
    </div>
  );
};

export default AdminApp;
