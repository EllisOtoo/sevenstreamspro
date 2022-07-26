import React, { useState } from "react";
import Image from "next/image";
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
    <div className="py-12 flex items-center">
      <div className="flex flex-col md:flex-row w-9/12 mx-auto">
        <div className="w-12/12 md:w-6/12 flex flex-col gap-12">
          <div style={{ width: "250px", height: "65px" }} className="relative">
            <Image
              layout="fill"
              src="/sevensStreamsLogo.png"
              alt="logo sevenstreams"
            ></Image>
          </div>

          <h2
            className={`font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-700`}
          >
            <span className="text-7xl">No. 1 </span> Haulage Company
          </h2>
          <p className="text-4xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel.
          </p>
          <div className="flex">
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
            <button className="inline-block px-6 py-2.5 bg-sky-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-sky-200 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
              Submit
            </button>
          </div>
        </div>
        <div className="w-12/12 hidden md:block">Here nwo</div>
      </div>
    </div>
  );
}

export default LandingSection;
