import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import AdminApp from "@/components/Admin/Spa/adminApp";

function AdminAppointment() {
  return (
    <div className="absolute ml-[320px] top-[110px] w-[1120px]">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
            <Typography variant="h5" color="white">
             
              MANAGE SPA APPOINTMENTS
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 mx-[60px]">
    <div>
     
      <br></br>
      
      
      <AdminApp />
      <br></br>
      <br></br>
      
    </div>
    </CardBody>
        </Card>

      </div>
    </div>
  );
}

export default AdminAppointment;