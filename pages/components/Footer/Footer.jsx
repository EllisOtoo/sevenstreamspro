import { TextField, Typography } from "@mui/material";

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

        <div className="md:w-4/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          praesentium quasi placeat totam earum corrupti sapiente quaerat
          consectetur consequatur sed exercitationem facilis itaque, assumenda
          nisi sequi et laudantium culpa ex.
        </div>

        <div className="flex flex-col bg-slate-200 p-12 md:w-6/12">
          <Typography variant="h4">Contact Us</Typography>
          <TextField
            id="standard-basic"
            label="Enter Your Name"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Enter Your Contact No.:"
            variant="standard"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
