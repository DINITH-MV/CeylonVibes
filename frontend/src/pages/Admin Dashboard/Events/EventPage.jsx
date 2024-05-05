import EventPack from '@/components/Admin/Events/EventPackages'
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react'
import PDFFile from './EventReport';
import EventseditPage from '@/components/Admin/Events/eventedit';

export default function EventPage() {
  return (   
    <div> 
      <EventseditPage />       
    </div>    
  )
}
