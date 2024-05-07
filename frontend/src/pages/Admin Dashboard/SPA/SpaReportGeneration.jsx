import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import SPALOGOADMIN from '../../../components/Admin/Spa/SPALOGOADMIN'
import ReportGeneration from '../../../components/Admin/Spa/SPArepGen';



export default function SPAREPORTGENERATIONPAGE(){
    return(
      <div className="absolute ml-[320px] top-[110px] w-[1120px]">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
            <Typography variant="h5" color="white">
              
              MANAGE SPA REPORT
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 mx-[60px]">
        <div>
            
            <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Coda&family=Fira+Sans&family=Dancing+Script&family=Kay+Pho+Du&family=Spirax&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Abel&family=Cantora+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-light.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap"
          rel="stylesheet"
        />
      </div>
              
            <ReportGeneration/>
            <br></br>
            <br></br>
            <br></br>
        </div>
        </CardBody>
        </Card>

      </div>
    </div>
        
    )
}