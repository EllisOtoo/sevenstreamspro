import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "./components/Footer/Footer";
// import SpreadSection from "./components/SpreadSection.jsx/SpreadSection";
// import MUISection from "./components/MUISection/MUISection";
import ModernNav from "./components/ModernNavigation/MordernNav.jsx";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import LandingSection from "./components/LandingSection/LandingSection";
import Slider from "./components/AntComponents/AntCarousel.js";
import FeatureIcon from "./components/Atoms/FeatureIcon.jsx";
import { Col, Divider, Row, Typography } from "antd";
import TeamCard from "./components/TeamCard/TeamCard";
import BodySectionStyle01 from "./components/BodySection/BodySectionStyle01";
import Card from "@mui/material/Card";
import useMediaQuery from "@mui/material/useMediaQuery";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid } from "@mui/material";
// const customTheme = createTheme({
//   palette: {
//     secondary: {
//       main: "#fff",
//     },
//   },
// });

import SwipeableViews from "react-swipeable-views";

const stylesBetter = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    background: "#FEA900",
  },
  slide2: {
    background: "#B3DC4A",
  },
  slide3: {
    background: "#6AC0FF",
  },
};

const MyComponent = () => (
  <SwipeableViews>
    <div style={Object.assign({}, stylesBetter.slide, stylesBetter.slide1)}>
      slide n°1
    </div>
    <div style={Object.assign({}, stylesBetter.slide, stylesBetter.slide2)}>
      slide n°2
    </div>
    <div style={Object.assign({}, stylesBetter.slide, stylesBetter.slide3)}>
      slide n°3
    </div>
  </SwipeableViews>
);

export default function Home() {
  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <div className={styles.container}>
      <Head>
        <title>Sevenstreams Ltd.</title>
        <meta
          name="description"
          content="Sevenstreams Limited is a haulage company based in Ghana."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModernNav />
      <LandingSection />
      <Slider />
      <div className="w-full pt-2 text-3xl">
        <h2 className="font-black text-center text-sky-500 ">How we work</h2>
      </div>
      <Row className="md:w-12/12  px-2 pb-8 mx-auto" gutter={[8, 4]}>
        {[
          {
            title: "Respect",
            color: "#f5ec3e",
            description:
              "We demand trust, integrity and mutual respect from ourselves and others. ",
            imgSrc: "/Icons/HowWeWork/respect.png",
          },
          {
            title: "Quality",
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
            imgSrc: `/Icons/HowWeWork/effectiveness.png`,
          },
          {
            title: "Professionalism",
            color: "#f5ec3e",
            description:
              "We constantly improve our qualifications and are willing to share our experience",
            imgSrc: `/Icons/HowWeWork/professionalism.png`,
          },
        ].map((feature, index) => (
          <FeatureIcon
            reverse={(index + 1) % 2 === 0 ? true : false}
            key={feature.title}
            caption={feature.caption}
            title={feature.title}
            color={feature.color}
            description={feature.description}
            imgSrc={feature.imgSrc}
          />
        ))}
      </Row>
      <BodySectionStyle01 />
      <Row className="my-12" gutter={8} justify="space-around">
        <Col span={6} className="bg-[#95daf7]">
          <div style={{ width: 120, height: 120 }} className="p-4  relative">
            <Image layout="fill" src="/shield.png" alt="We believe in"></Image>
          </div>{" "}
        </Col>
        <Col span={12}>
          <h2 className="font-black text-sky-500 text-3xl  ">Why Choose Us</h2>
          <ul
            style={{
              listStyleImage: "url(/bullet_2.png)",
              paddingInlineStart: "1ch",
            }}
            className="text-xl md:text-3xl"
          >
            <li>We understand the needs of our clients</li>
            <li>It is our social responsibility.</li>
            <li>Comprehensive and dynamic range of services.</li>
            <li>Flexible and partnership approach.</li>
            <li>Global and local network of business partners</li>
          </ul>
        </Col>
      </Row>

      <div className=" flex bg-sky-800 py-12 justify-around">
        {/* <h2 className="font-black text-sky-500 text-center text-3xl">Team</h2> */}
        <div className="flex flex-col gap-12 items-center md:items-end">
          <div className="flex flex-col md:flex-row gap-12">
            {/* <div className="flex flex-col items-start h-80 w-72">
              <p className="text-5xl text-white font-bold">Team </p>
              <p className="text-xl text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div> */}
            <Card
              sx={{ width: matches ? 300 : 200, background: "none" }}
              elevation="0"
            >
              <div>
                <p className="text-5xl font-bold text-white mb-0">Team </p>
                <hr className="bg-yellow-500" />
              </div>
              {/* <Divider color="#FDA228" sx={{ height: 2, width: "92px" }} /> */}

              {/* <Divider sx={{ bgColor: "#FDA228", height: 10 }} /> */}
              {/* <p className="text-xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
            </Card>
            <TeamCard
              imgSrc="/team/ceo.jpg"
              role={"Chief Executive Officer"}
              memberName={"Gerard Wilson"}
            />
            <TeamCard
              imgSrc="/team/karleen.jpg"
              memberName={"Karleen Wilson"}
              role={"Chief Administrative Officer"}
            />
            <TeamCard
              imgSrc="/team/chief_operation.jpg"
              memberName={"Wonder Honu"}
              role={"Chief Operations Officer"}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            {" "}
            <TeamCard
              imgSrc="/team/consultant_one.jpg"
              role={"Consultant"}
              memberName={"Ben Oteng-Sekyere"}
            />
            <TeamCard
              imgSrc="/team/consultant_two.jpg"
              memberName={"Frank Say-on Adontsri"}
              role={"Consultant"}
            />
            <TeamCard
              imgSrc="/team/chief_operations.jpg"
              role={"Operations Manager"}
              memberName={"Bright Honu"}
            />
            <TeamCard
              memberName={""}
              imgSrc="/team/Business_Promotions.jpg"
              role={"Business Promotions Representative"}
            />{" "}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
