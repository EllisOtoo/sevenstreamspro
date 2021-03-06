import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ResponsiveAppBar from "./components/HeroSection";
import Footer from "./components/Footer/Footer";
import SpreadSection from "./components/SpreadSection.jsx/SpreadSection";
import MUISection from "./components/MUISection/MUISection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar />
      <MUISection
        cta={"Learn more"}
        src={"/haul02.jpeg"}
        title={"About Us"}
        mainText={
          "Seven Streams Limited is a legally registered transport and logistics company which deals in the haulage of petroleum products with a solid commitment to impeccable service and a flexible approach to business. As a transformative company, we are committed to bringing job creation and empowerment to help transform the haulage industry, help its people advance and contribute to the economic growth of Ghana. We are not a company that looks at the bottom line first, we look at our people and how we can employ more qualified personnel with sustainable employment."
        }
      />
      {/*    <SpreadSection
        cta={"learn more"}
        title={"About Us"}
        description="Seven Streams Limited is a legally registered transport and logistics company which deals in the haulage of petroleum products with a solid commitment to impeccable service and a flexible approach to business. 
As a transformative company, we are committed to bringing job creation and empowerment to help transform the haulage industry, help its people advance and contribute to the economic growth of Ghana. We are not a company that looks at the bottom line first, we look at our people and how we can employ more qualified personnel with sustainable employment."
        src={"/haul02.jpeg"}
      /> */}
      {/* <div className="w-8/12 max-h-max pb-12 mx-auto flex flex-col justify-center">
        <h1 className="text-5xl my-12">Who We Are</h1>
        <div className="flex flex-col md:flex-row gap-12">
          <div>
            <Image
              width={300}
              height={300}
              layout="fixed"
              src={"/haul02.jpeg"}
              alt=""
            ></Image>
          </div>

          <div className="flex flex-col gap-12">
            <p>
              Seven Streams Limited is a legally registered transport and
              logistics company which deals in the haulage of petroleum products
              with a solid commitment to impeccable service and a flexible
              approach to business.
            </p>
            <p>
              As a transformative company, we are committed to bringing job
              creation and empowerment to help transform the haulage industry,
              help its people advance and contribute to the economic growth of
              Ghana. We are not a company that looks at the bottom line first,
              we look at our people and how we can employ more qualified
              personnel with sustainable employment.
            </p>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
