import React from "react";
import Image from "next/image";
import { Col, Row, Divider } from "antd";

function FeatureIcon({ imgSrc, title, color, description, caption, reverse }) {
  return (
    <Col xs={{ span: 24 }} md={{ span: 8 }} className={``}>
      <div className={`flex flex-col items-center`}>
        <div className={`bg-[#f5ec3e]  h-[6rem] w-[6rem]`}>
          <div className={`relative h-[6rem] w-[6rem]`}>
            <Image layout="fill" src={imgSrc} alt="How we work principles" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl text-center"> {title}</span>
          <div className="text-center w-8/12"> {description}</div>
        </div>
      </div>
      <Divider />
    </Col>
  );
}

export default FeatureIcon;
