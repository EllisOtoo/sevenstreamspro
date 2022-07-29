import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({
  details: { description, role, imgSrc, memberName },
}) {
  // console.log(details);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={
            "https://st2.depositphotos.com/1158045/5879/i/600/depositphotos_58797721-stock-photo-young-black-businessman-outdoor.jpg"
          }
          alt="Team Member Image goes here"
        />
        <CardContent>
          <Typography
            sx={{ margin: "0 0" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {memberName}
          </Typography>
          <Typography
            gutterBottom
            className="text-sky-500"
            variant="h6"
            component="div"
          >
            {role}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
