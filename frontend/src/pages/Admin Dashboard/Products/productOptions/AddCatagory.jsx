import { useRef, useState } from "react";
import axios from 'axios';
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';

import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import {
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import {
    Sidenav,
    DashboardNavbar,
    Configurator,
    Footer,
} from "@/widgets/layout";
import routes from "@/Admin Panel/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/Admin Panel/context";
import { IconButton } from "@material-tailwind/react";


const AddCatagory = () => {

    const [name, setName] = useState('');
    const [files, setFiles] = useState(null);
    const inputRef = useRef();
    const [controller, dispatch] = useMaterialTailwindController();
    const { sidenavType } = controller;
    // console.log(inputRef.current.files[0]);

    const notify = () =>
        toast.promise(
            handleUpload(),
            {
                loading: "Saving...",
                success: <b>New Category Added!</b>,
                error: <b>Could not save.</b>,
            }
        );


    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    };

    // send files to the server // learn from my other video
    const handleUpload = async (e) => {
        const formdata = new FormData()
        formdata.append('file', files[0])
        formdata.append('name', name);
        try {
            const response = await axios.post('http://localhost:5012/catagories', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
        } catch (error) {
            console.error("Error adding category:", error);
        }
    }

    return (
        <div className="min-h-screen bg-blue-gray-50/50">
            <Sidenav
                routes={routes}
                brandImg={
                    sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
                }
            />
            <div className="p-4 xl:ml-80">
                <DashboardNavbar />
                <Configurator />
                <IconButton
                    size="lg"
                    color="white"
                    className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
                    ripple={false}
                    onClick={() => setOpenConfigurator(dispatch, true)}
                >
                    <Cog6ToothIcon className="h-5 w-5" />
                </IconButton>
                <CardHeader variant="gradient" color="gray" className="mt-[20px] mb-8 p-6">
                            <Typography variant="h6" color="white">                                
                                ADD A NEW CATAGORIES 
                            </Typography>
                        </CardHeader>
                <div>
                    <div>
                        <div id="logInBox" className="w-[370px] h-[40%] text-center min-h-67vh my-70px bg-[rgb(225,225,225)] rounded-[20px] mx-auto mt-[70px]">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 1.5,
                                    delay: 1 / 10,
                                }}>
                                <div className="mainContent">
                                    <div className="headerAndInputs text-center pt-[20px] mb-[60px]">

                                    <form onSubmit={handleUpload}>
                                        <div className="inputoxes">
                                            <input type="text" name="name" htmlFor="name"
                                                onChange={(e) => setName(e.target.value)} placeholder="Name of the Catagory" className="border-none pl-[10px] p-y-[40px] text-[12pt] mb-[3px] mt-[10px] rounded-[10px] bg-[rgba(255, 255, 255, 0.6)] h-[40px] w-[320px] hover:bg-[rgb(255,255,255)] transition-duration-70ms" id="name" />

                                            <div
                                                className="flex flex-col justify-center h-[200px] border-[2px] border-dashed border-[#282727] mx-[10%] mt-[20px] mb-[20px]"
                                                onDragOver={handleDragOver}
                                                onDrop={handleDrop}
                                            >
                                                <h1>Drag and Drop Files to Upload</h1>
                                                <h1>Or</h1>
                                                <input
                                                    type="file"
                                                    multiple
                                                    onChange={(event) => setFiles(event.target.files)}
                                                    hidden
                                                    accept="image/png, image/jpeg"
                                                    ref={inputRef}
                                                />
                                                <button type="button" onClick={() => inputRef.current.click()}>Select Files</button>
                                            </div>
                                        </div>
                                        {files && (
                                            <div className="uploads">
                                                <ul>
                                                    {Array.from(files).map((file, idx) => <li className="font-[12pt]" key={idx}>{file.name}</li>)}
                                                </ul>
                                                <div className="actions ">
                                                    <button className="rounded-[7px] p-[7px] bg-[#e9eda1] mb-[0]" onClick={() => setFiles(null)}>Cancel</button> <br />
                                                    <br />
                                                </div>
                                            </div>
                                        )}
                                        <div>
                                            <button className="rounded-[7px] w-[300px] p-[6px] text-[#fff] bg-[#c33636] mt-[0] mb-[20px]" type="submit" >Submit</button>
                                            <Toaster position="top-center"
                                                reverseOrder={false}
                                                gutter={13}
                                                containerClassName=""
                                                containerStyle={{}}
                                                toastOptions={{
                                                    // Define default options
                                                    className: '',
                                                    duration: 5000,
                                                    style: {
                                                        background: '#363636',
                                                        color: '#fff',
                                                        boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.2)',
                                                        padding: '4px 4px 4px 8px',
                                                    },

                                                    // Default options for specific types
                                                    success: {
                                                        duration: 3000,
                                                        theme: {
                                                            primary: 'green',
                                                            secondary: 'black',
                                                        },
                                                    },
                                                }}
                                            />
                                        </div>

</form>
                                        {/* </form> */}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="text-blue-gray-600">
                    <Footer />
                </div>
            </div>
        </div>

    );

}
export default AddCatagory;
