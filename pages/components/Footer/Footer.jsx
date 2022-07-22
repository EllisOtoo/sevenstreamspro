import {
  TextField,
  Typography,
  Stack,
  Divider,
  Button,
  Box,
} from "@mui/material";

const Footer = () => {
  return (
    <div className=" bg-slate-100">
      <div className="flex flex-col md:flex-row  gap-12 w-8/12 max-h-max mx-auto pt-24 pb-12">
        <div className="md:w-1/12">
          {/* divide-y divide-slate-300 */}
          <ul className="">
            <li>Our Team</li>
            <li>Contact Us</li>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>

        <Stack direction={"column"} spacing={2} className="md:w-4/12">
          <span>
            <span className={"font-semibold"}>Location: </span> Adenta Lotto
            Kiosk (Same office with Black Busters Family Media). <br /> Adenta,
            Accra
          </span>

          <Divider />
          <span>
            {" "}
            <span className="font-bold">Phone: </span> +233598104083 /
            +233247783900 / +233543953808
          </span>
        </Stack>

        <div className="flex flex-col bg-slate-200 p-12 md:w-6/12">
          <Typography variant="h4">Contact Us</Typography>
          <TextField id="standard-basic" label="Your Name" variant="standard" />
          <TextField
            id="standard-basic"
            label="Your Phone"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Your Email"
            variant="standard"
          />
          <TextField
            multiline
            maxRows={4}
            id="standard-basic"
            label="Message"
            variant="standard"
          />

          <Button sx={{ marginTop: "20px" }} variant="outlined">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
