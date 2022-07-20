import React from "react";
import {
  Container,
  Box,
  Grid,
  Item,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import Image from "next/image";

function MUISection({ title, mainText, src, cta }) {
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
        <Grid className="items-center" container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box className="relative w-auto h-72" sx={{}}>
              <Image
                layout="fill"
                src={"/haul02.jpeg"}
                objectFit="contain"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography>{mainText}</Typography>
            <Button variant="outlined">{cta}</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default MUISection;
