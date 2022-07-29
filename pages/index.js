import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ResponsiveAppBar from "./components/HeroSection";
import Footer from "./components/Footer/Footer";
import SpreadSection from "./components/SpreadSection.jsx/SpreadSection";
import MUISection from "./components/MUISection/MUISection";
import ModernNav from "./components/ModernNavigation/MordernNav.jsx";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import LandingSection from "./components/LandingSection/LandingSection";
import ServicesCard from "./components/ServicesCard/ServicesCard.jsx";
import Slider from "./components/AntComponents/AntCarousel.js";
import { DatePicker } from "antd";
import AntdNavigation from "./components/AntComponents/AntNavigation.jsx";
import { FeatureIcon } from "./components/index";
import { Col, Row } from "antd";

// const customTheme = createTheme({
//   palette: {
//     secondary: {
//       main: "#fff",
//     },
//   },
// });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ResponsiveAppBar /> */}
      <ModernNav />
      {/* <AntdNavigation /> */}
      <LandingSection />
      {/* <DatePicker /> */}
      <Slider />
      {/* <div className="flex flex-wrap w-10/12 gap-2"> */}

      <Row className="md:w-8/12 py-12  px-2 mx-auto" gutter={[8, 4]}>
        {[
          {
            title: "Respect",
            color: "#f5ec3e",
            description:
              "We demand trust, integrity and mutual respect from ourselves and others. ",
            imgSrc: "/Icons/HowWeWork/commitment.png",
          },
          {
            title: "Qaulity",
            color: "#f5ec3e",
            description:
              "We set high standards for the quality of all our activities.",
            imgSrc: "/Icons/HowWeWork/quality.png",
          },
          {
            title: "Commitment",
            color: "#f5ec3e",
            description:
              "We are fully involved in every project, the hard work and success of our employees gives us and our clients the greatest satisfaction.  ",
            imgSrc: "/Icons/HowWeWork/commitment.png",
          },
          {
            title: "Responsibility",
            color: "#f5ec3e",
            description:
              "We take responsibility for our work and the environment in which we operate.",
            imgSrc: "/Icons/HowWeWork/commitment.png",
          },
        ].map((feature) => (
          <FeatureIcon
            key={feature.title}
            caption={feature.caption}
            title={feature.title}
            color={feature.color}
            description={feature.description}
            imgSrc={feature.imgSrc}
          />
        ))}
      </Row>

      {/* </div> */}
      <div className="py-12  bg-gray-200">
        <h2
          style={{
            color: "linear-gradient(to right, #553c9a 45%, #ee4b2b)",
          }}
          className="mx-auto text-2xl w-10/12"
        >
          Meet our Team
        </h2>

        <div className="flex flex-row md:flex-row mx-auto w-10/12 justify-around flex-wrap gap-2">
          {[
            "https://images.yen.com.gh/images/2fffb2680db922de.jpg",
            "https://mcdonaldscaffolding.com/wp-content/uploads/2020/09/maragaret-mcdonald-general-haulage-min.jpg",
            "https://4f2s6b1l8e0pe5cqg3beg6b2-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/shutterstock_1025490817-1.jpg",
            "https://saidinalogistic.com/wp-content/uploads/2021/12/istockphoto-1130261613-612x612-1.jpg",
          ].map((item) => (
            <ServicesCard key={item} imgSrc={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
