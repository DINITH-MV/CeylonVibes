import React from "react";
import SPALOGOMENUEDIT from "../../../components/Admin/Spa/SPALOGOMENUEDIT";
import SPAEDITMENU from "../../../components/Admin/Spa/SPAMENUEDIT";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import CLASSICALEDIT from "@/components/Admin/Spa/CLASSICALEDIT";

function ClassicalEditPage() {
  return (
    <div>
      <div className="absolute ml-[320px] top-[110px] w-[1120px]">

        <Card className='mt-[50px]'>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
            SHOW SPA RITUALS
            </Typography>
          </CardHeader>

          <CLASSICALEDIT />

        </Card>
      </div>
    </div>
  );
}

export default ClassicalEditPage;