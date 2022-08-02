import { Carousel } from "antd";
import React from "react";
import { Divider } from "antd";
import Image from "next/image";
import { Col, Row } from "antd";

const contentStyle = {
  height: "auto",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <Carousel className="bg-slate-800" autoplay afterChange={onChange}>
        <div
          className="py-12 px-12 w-8/12 text-white flex flex-row"
          style={contentStyle}
        >
          <Row gutter={4} className="">
            <Col span={8}>
              <Image
                width={100}
                height={100}
                src={"/shared-vision.png"}
                alt={"visin"}
              />
            </Col>
            <Col span={16}>
              <h2 className="text-2xl text-white text-sky-200">Our Vision</h2>
              To be one of the top bulk oil transportation companies in Ghana in
              terms of size, excellent service, and technology.
            </Col>
          </Row>
        </div>
        <div className="py-12 px-12 text-white flex" style={contentStyle}>
          <Row gutter={4}>
            <Col span={8}>
              <Image
                width={100}
                height={100}
                src={"/leadership_01.png"}
                alt={"visin"}
              />
            </Col>
            <Col span={16}>
              <h2 className="text-2xl text-white text-sky-200">Our Mision</h2>
              To consistently meet the logistical needs of our clients by
              providing comprehensive transport solutions with our wide array of
              fleet and full-service portfolio in haulage.{" "}
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
};

export default App;
