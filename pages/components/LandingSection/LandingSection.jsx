import React, { useState } from "react";
import Image from "next/image";
import { blue } from "@ant-design/colors";

import styles from "../../../styles/Home.module.css";
import {
  TextField,
  Typography,
  Stack,
  Divider,
  Button,
  Paper,
  Box,
  Fade,
} from "@mui/material";

function LandingSection() {
  const [formField, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  return (
    <div
      className="py-12 bg-cover w-12/12 flex items-center priority bg-[url('/haulage_size.jpg')]
    "
    >
      <div className="flex flex-col md:flex-row w-10/12 mx-auto">
        <div className="w-12/12 md:w-6/12 flex flex-col">
          <div style={{ width: "250px", height: "65px" }} className="relative">
            <Image
              layout="fill"
              src="/sevenstreamsLogo.png"
              alt="logo sevenstreams"
            ></Image>
          </div>
          <h2 className={`font-extrabold text-white text-6xl`}>
            <span className="">No. 1 </span> Haulage Company
          </h2>
          <p className="text-4xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel.
          </p>
          <Divider color="white" />
          <Box className="flex bg-sky-100 my-12">
            <TextField
              InputLabelProps={
                {
                  // style: { color: "#fff" },
                }
              }
              className="w-full"
              value={formField.name}
              InputProps={
                {
                  // style: { color: "#fff" },
                }
              }
              onChange={(e) => {
                setValue({
                  ...formField,
                  name: e.target.value,
                });
              }}
              name="name"
              id="filled-basic"
              label="Your Name"
              variant="filled"
            />
            <button className="inline-block px-6 py-2.5 bg-sky-500 text-white font-medium text-xs leading-tight uppercase  shadow-lg hover:bg-sky-200 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
              Submit
            </button>
          </Box>
        </div>
        {/* hidden md:block v */}
      </div>
    </div>
  );
}

export default LandingSection;
