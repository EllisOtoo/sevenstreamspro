import React, { useState } from "react";
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
    <div className="bg-slate-100 h-screen flex items-center">
      <div className="flex flex-col md:flex-row w-8/12 mx-auto">
        <div className="w-12/12 md:w-6/12 flex flex-col gap-12">
          <h2 className="text-4xl md:text-7xl font-semibold">
            No 1 Haulage Company
          </h2>
          <p className="text-4xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel
            quidem ipsam beatae ratione veniam nobis veritatis, aliquam
            voluptatum accusantium minima sint animi autem quaerat eos
            voluptate. Ipsum, ullam ab.
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
