import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
// import imageOne from "./../assets/one.jpg";

export default function TeamCard({ description, imgSrc, role, memberName }) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="mx-auto bg-sky-500 h-1"></div>
          </Grid>
        </Grid>
        <CardMedia
          component="img"
          height="140"
          image={imgSrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            sx={{ margin: "0 0" }}
            gutterBottom
            variant="h5"
            className="text-sky-800"
            component="div"
          >
            {memberName}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
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
