import { useRef, useState } from "react";
import axios from 'axios';
import { motion } from "framer-motion";
import {
    Card,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import PDFFile from '../Create Report/pdfCatagoryTable';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
    Sidenav,
    DashboardNavbar,
    Configurator,
    Footer,
} from "@/widgets/layout";
import { useMaterialTailwindController, setOpenConfigurator } from "@/Admin Panel/context";
import routes from "@/Admin Panel/routes";

const AddItemsCatagory = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [discPrice, setDiscPrice] = useState('');
    const [type, setType] = useState('nuts&seeds');
    const [files, setFiles] = useState(null);
    const inputRef = useRef();
    // console.log(inputRef.current.files[0]);

    const [items, setItems] = useState([]);
    const [controller, dispatch] = useMaterialTailwindController();
    const { sidenavType } = controller;

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
        formdata.append('price', price);
        formdata.append('discPrice', discPrice);
        formdata.append('type', type);
        try {
            const response = await axios.post('http://localhost:5012/products', formdata, {
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

                <div className="mt-12 mb-8 flex flex-col gap-12">
                    <Card>
                        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                            <Typography variant="h6" color="white">
                                ADD A NEW PRODUCT
                            </Typography>
                        </CardHeader>
                        <div>
                            <div id="logInBox" className="w-[370px] h-[40%] text-center min-h-67vh my-70px bg-[rgb(225,225,225)] rounded-[20px] mx-auto mb-[60px] mt-[30px]">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: .8,
                                        delay: 1 / 10,
                                    }}>
                                    <div className="mainContent">
                                        <div className="headerAndInputs text-center pt-[20px]">
                                            <form onSubmit={handleUpload}>
                                                <div className="inputBoxes">
                                                    <input type="text" name="name" htmlFor="name"
                                                        onChange={(e) => setName(e.target.value)} placeholder="Name of the Item" className="border-none pl-[10px] p-y-[40px] text-[12pt] mb-[3px] mt-[10px] rounded-[10px] bg-[rgba(255, 255, 255, 0.6)] h-[40px] w-[320px] hover:bg-[rgb(255,255,255)]" id="name" />
                                                    <input type="text" name="price" htmlFor="price"
                                                        onChange={(e) => setPrice(e.target.value)} placeholder="Price of the Item" className="border-none pl-[10px] p-y-[40px] text-[12pt] mb-[3px] mt-[10px] rounded-[10px] bg-[rgba(255, 255, 255, 0.6)] h-[40px] w-[320px] hover:bg-[rgb(255,255,255)]" id="name" />
                                                    <input type="text" name="discPrice" htmlFor="discPrice"
                                                        onChange={(e) => setDiscPrice(e.target.value)} placeholder="Discount price of the Item" className="border-none pl-[10px] p-y-[40px] text-[12pt] mb-[3px] mt-[10px] rounded-[10px] bg-[rgba(255, 255, 255, 0.6)] h-[40px] w-[320px] hover:bg-[rgb(255,255,255)]" id="name" />
                                                    <input type="text" name="type" htmlFor="type"
                                                        onChange={(e) => setType(e.target.value)} className="border-none pl-[10px] p-y-[40px] text-[12pt] mb-[3px] mt-[10px] rounded-[10px] bg-[rgba(255, 255, 255, 0.6)] h-[40px] w-[320px] hover:bg-[rgb(255,255,255)]" id="name" hidden />

                                                    <div
                                                        className="flex flex-col justify-center h-[200px]  border-[2px] border-dashed border-[#282727] mx-[10%] mt-[20px] mb-[20px]"
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
                                                <button className="rounded-[7px] w-[300px] p-[6px] text-[#fff] bg-[#c33636] mt-[0] mb-[20px]" type="submit" >Submit</button>
                                            </form>
                                            {/* </form> */}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </Card>

                </div>
                <div className="text-blue-gray-600">
                    <Footer />
                </div>
            </div>
        </div>
    );

}
export default AddItemsCatagory;
