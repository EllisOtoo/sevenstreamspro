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
import FeatureIcon from "./components/Atoms/FeatureIcon";
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
      <div className="w-8/12 pl-4 pt-2 text-3xl">
        <h2 className="font-black text-sky-500 ">How we work</h2>
      </div>
      <Row className="md:w-8/12  px-2 pb-8 mx-auto" gutter={[8, 4]}>
        {[
          {
            title: "Respect",
            color: "#f5ec3e",
            description:
              "We demand trust, integrity and mutual respect from ourselves and others. ",
            imgSrc: "/Icons/HowWeWork/respect.png",
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
            imgSrc: `/Icons/HowWeWork/responsibility.png`,
          },
          {
            title: "Effectiveness",
            color: "#f5ec3e",
            description:
              "We are ambitious and consistently strive to achieve our goals",
            imgSrc: `/Icons/HowWeWork/responsibility.png`,
          },
          {
            title: "Professionalism",
            color: "#f5ec3e",
            description:
              "We constantly improve our qualifications and are willing to share our experience",
            imgSrc: `/Icons/HowWeWork/responsibility.png`,
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
            {
              description:
                " With over 10 years of experience in the field of Haulage, Gerald is competent in his field and has provided various services for several companies and private individuals who can attest to his high professional attitude and competence. He is efficient, hardworking, and always eager to see his team of professionals work hard and come out successfully in any service delivery. To see the company succeed and on top is his passion.",
              imgSrc: "https://images.yen.com.gh/images/2fffb2680db922de.jpg",
              memberName: "Gerald Wilson ",
              role: "General Manager",
            },
            {
              description:
                " Proficient at creating and maintaining good business relationships with potential clients. Her expertise is in administrative management and marketing.",
              imgSrc: "https://images.yen.com.gh/images/2fffb2680db922de.jpg",
              memberName: "Karleen Wilson",
              role: "Administrative Manager",
            },
            {
              description:
                " An expert with relevant skills in Business Development and Human Resource Management",
              memberName: "Ben Oteng-Sekyere",
              role: "Consultant",
            },
            {
              description:
                " A passionate enthusiast, with more than 7 years working experience in Business Development.",
              memberName: "Frank Adontsri",
              role: "Consultant",
            },
          ].map((details, index) => (
            <ServicesCard key={index} details={details} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
