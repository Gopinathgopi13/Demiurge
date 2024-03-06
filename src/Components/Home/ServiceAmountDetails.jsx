import React, { useState } from "react";
import Popup from "reactjs-popup";
import { FaArrowRight } from "react-icons/fa";
import {
  Document,
  Page,
  Text,
  View,
  PDFDownloadLink,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import logo from "../../../public/OrginalLogo2.png";
import { color } from "framer-motion";
const ServiceAmountDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    console.log(formData.name);
    console.log(formData.email);
    console.log(formData.service);
    const MyDocument = () => (
      <Document>
        <Page>
          <View style={styles.page}>
            <Image src={logo} />
            <Text>Name: {formData.name}</Text>
            <Text>Email: {formData.email}</Text>
            <Text>Service: {formData.service}</Text>
          </View>
        </Page>
      </Document>
    );
    const styles = StyleSheet.create({
      page: {
        // // display: "flex",
        // flexDirection: "row",
        // alignItem: "center",
      },
    });
    return (
      <PDFDownloadLink document={<MyDocument />} fileName="form-data.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
    );
  };

  return (
    <>
      <Popup
        trigger={
          <button className="lg:px-16 px-10 py-5 lg:text-xl font-semibold border-2 hover:border-[#ff8400] flex items-center gap-4 cursor-pointer ">
            <div id="shine">Unlock a no-cost proposal</div>
            <FaArrowRight size={20} className="primaryColor" />
          </button>
        }
        position="center center"
      >
        {(close) => (
          <div className="popup bg-white h-[50vh] w-[50vh]">
            <form className="flex flex-col gap-5 px-5">
              <h1 className="text-3xl font-medium primaryColor">
                Amount Details
              </h1>
              <div className="relative w-full h-10">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                />
                <label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                  htmlFor="name"
                >
                  Username
                </label>
              </div>
              <div className="relative w-full h-10">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                />
                <label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                  htmlFor="email"
                >
                  Email
                </label>
              </div>

              <div className="relative w-full h-10">
                <label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                  htmlFor="service"
                >
                  Select the service
                </label>
                <select
                  className="w-full"
                  htmlFor="service"
                  name="service" // Add name attribute here
                  value={formData.service} // Set value attribute to formData.service
                  onChange={handleChange}
                >
                  <option value="Social Marketing">Social Marketing</option>
                  <option value="SEO">SEO</option>
                  <option value="Performance Marketing">
                    Performance Marketing
                  </option>
                  <option value="PR">PR</option>
                  <option value="Video Marketing">Video Marketing</option>
                  <option value="Branding">Branding</option>
                  <option value="Community Management">
                    Community Management
                  </option>
                  <option value="Website Development">
                    Website Development
                  </option>
                  <option value="Website Development">
                    Website Development
                  </option>
                  <option value="CGI Advertisement">CGI Advertisement</option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="AR/VR Advertisement">
                    AR/VR Advertisement
                  </option>
                  <option value="Lead Generation">Lead Generation</option>
                </select>
              </div>

              {/* Add other form fields here */}
            </form>
            {/* <button
              onClick={handleDownload}
              className="border text-white px-3 py-1 bg-red-600"
            >
              Download
            </button> */}
            {handleDownload()}
            <button
              onClick={close}
              className="absolute top-0 right-0 border text-white px-3 py-1 bg-red-600"
            >
              Cancel
            </button>
          </div>
        )}
      </Popup>
    </>
  );
};

export default ServiceAmountDetails;
