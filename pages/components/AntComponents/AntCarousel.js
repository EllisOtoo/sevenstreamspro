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
        <div className="py-12">
          <Row gutter={12} justify="center">
            <Col span={4}>
              <Image
                width={100}
                height={100}
                // layout={"responsive"}
                // layout="fill"
                src={"/shared-vision.png"}
                alt={"visin"}
              />
            </Col>
            <Col span={12} style={{ color: "white" }}>
              <h2 className="text-2xl text-white text-sky-200">Our Vision</h2>
              <p>
                {" "}
                To be one of the top bulk oil transportation companies in Ghana
                in terms of size, excellent service, and technology.
              </p>
            </Col>
          </Row>
        </div>
        <div className="py-12">
          <Row gutter={12} justify="center">
            <Col span={4}>
              <Image
                width={100}
                height={100}
                // layout={"responsive"}
                // layout="fill"
                src={"/shared-vision.png"}
                alt={"visin"}
              />
            </Col>
            <Col span={12} style={{ color: "white" }}>
              <h2 className="text-2xl text-white text-sky-200">Our Mission</h2>
              <p>
                To consistently meet the logistical needs of our clients by
                providing comprehensive transport solutions with our wide array
                of fleet and full-service portfolio in haulage.
              </p>
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
};

export default App;
