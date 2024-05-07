import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const PaymentAdmin = () => {
  return (
    <div className="absolute ml-[320px] top-[110px] w-[1120px]">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
            <Typography variant="h5" color="white">
              
              MANAGE PAYMENTS
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 mx-[60px]">
          <div className="container mx-auto mt-10">
            <center><h1 className="text-3xl font-semibold mb-6">Payments</h1></center>
            <br />
            <br />

            <div className="flex justify-center space-x-6">

              <Link to="/admin/received">
                <button className="bg-[#7f77f3] hover:bg-[#4255b6] text-black font-semibold py-4 px-8 rounded-lg shadow-md">
                  View Received Slips
                </button>
              </Link>
              <Link to="/admin/acceptedslips">
                <button className="bg-[#80e685] hover:bg-[#378f3b] text-black font-semibold py-4 px-8 rounded-lg shadow-md">
                  View Accepted Slips
                </button>
              </Link>
              <Link to="/admin/paymentss">
                <button className="bg-[#e1e971] hover:bg-[#667629] text-black font-semibold py-4 px-8 rounded-lg shadow-md">
                  Payment History
                </button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>

    </div>
    </div >
  );
};

export default PaymentAdmin;
