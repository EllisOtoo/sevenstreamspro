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
import { useEffect, useState } from "react";

const Footer = () => {
  const [formField, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    setTimeout(() => setSubmitted(false), 2000);
  }, [submitted]);

  const clearForm = (e) => {
    setValue({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    setSubmitted(true);
    e.preventDefault();
  };

  return (
    <div className=" bg-slate-900" style={{ color: "white" }}>
      <div className="flex flex-col md:flex-row  gap-12 w-10/12 md:w-8/12 max-h-max mx-auto pt-24 pb-12">
        <div className="md:w-2/12">
          {/* divide-y divide-slate-300 */}
          <ul className="">
            <li>Our Team</li>
            <li>Contact Us</li>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>

        <Stack direction={"column"} spacing={2} className="md:w-full">
          <span>
            <span className={"font-semibold"}>
              Location: <br />{" "}
            </span>{" "}
            Adenta Lotto Kiosk <br /> (Same office with Black Busters Family
            Media). <br /> Adenta, Accra
          </span>

          <Divider className="bg-[#4865b5]" />
          <span>
            {" "}
            <span className="font-bold">
              Phone: <br />{" "}
            </span>{" "}
            +233598104083 <br />
            +233247783900 <br /> +233543953808
          </span>
        </Stack>

        <div className="w-full border rounded-xl border-[#4865b5] p-4 ">
          <Typography color={"white"} variant="h4">
            Contact Us
          </Typography>
          <form onSubmit={clearForm} action="/api/form" method="post">
            <div>
              <TextField
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                className="w-full"
                value={formField.name}
                InputProps={{
                  style: { color: "#fff" },
                }}
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
              <TextField
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                InputProps={{
                  style: { color: "#fff" },
                }}
                className="w-full"
                name={"phoneNumber"}
                id="filled-basic"
                variant="filled"
                label="Your Phone"
                value={formField.phone}
                onChange={(e) => {
                  setValue({
                    ...formField,
                    phone: e.target.value,
                  });
                }}
              />
              <TextField
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                InputProps={{
                  style: { color: "#fff" },
                }}
                className="w-full"
                id="filled-basic"
                variant="filled"
                name="email"
                label="Your Email"
                value={formField.email}
                onChange={(e) => {
                  setValue({
                    ...formField,
                    email: e.target.value,
                  });
                }}
              />
              <TextField
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                InputProps={{
                  style: { color: "#fff" },
                }}
                className="w-full"
                multiline
                maxRows={4}
                name={"message"}
                id="filled-basic"
                variant="filled"
                label="Message"
                value={formField.message}
                onChange={(e) => {
                  setValue({
                    ...formField,
                    message: e.target.value,
                  });
                }}
              />
              <br />
            </div>
            {submitted && (
              <Fade style={{ transitionDelay: "500ms" }} in={true}>
                <Box className="rounded-lg" bgcolor={"green"}>
                  <Typography className="pl-4">
                    Thank you for Submitting
                  </Typography>
                </Box>
              </Fade>
            )}
            <Button
              // onClick={submit}
              sx={{ marginTop: "20px" }}
              variant="outlined"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
