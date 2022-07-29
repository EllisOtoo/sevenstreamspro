import React from "react";
import Image from "next/image";
import { Col, Row } from "antd";

function FeatureIcon({ imgSrc, title, color, description, caption }) {
  console.log(color);

  return (
    <Col span={12} className={``}>
      <div className="flex gap-2">
        <div className={`bg-[#f5ec3e]  h-[6rem] w-[6rem]`}>
          <div className={`relative h-[6rem] w-[6rem]`}>
            <Image layout="fill" src={imgSrc} />
          </div>
        </div>
        <div>
          <span className="text-2xl"> {title}</span>
          <div> {description}</div>
        </div>
      </div>
    </Col>
  );
}

export default FeatureIcon;
