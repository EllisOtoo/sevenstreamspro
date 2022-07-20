import React from "react";
import { Container, Box, Grid, Item, Paper, Typography } from "@mui/material";
import Image from "next/image";

function MUISection({ title, mainText, src }) {
  return (
    <Container maxWidth={"lg"}>
      <Box
        className="py-12 bg-sky-200 rounded-md px-12 my-12 "
        sx={{ width: "100%" }}
      >
        <Grid container>
          <Grid item>
            <Typography variant="h2">{title}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              className="relative w-full h-96"
              sx={{
                width: "100%",
                backgroundColor: "silver",
              }}
            >
              <Image layout="fill" src={"/haul02.jpeg"} alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {mainText}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default MUISection;
