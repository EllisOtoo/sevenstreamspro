import { Col, Row } from "antd";
import Image from "next/image";

const BodySectionStyle01 = () => {
  return (
    <Row className="my-12" gutter={8} justify="space-around">
      <Col span={6} className="bg-[#95daf7]">
        <div>
          <h2 className="text-3xl whitespace-normal md:text-5xl font-bold text-[#fff] ">
            Our keys for development
          </h2>
        </div>
      </Col>
      <Col span={12}>
        <ul
          style={{
            listStyleImage: "url(/bullet_2.png)",
            paddingInlineStart: "1ch",
          }}
          className="text-xl md:text-3xl"
        >
          <li>Desire for Excellence</li>
          <li>Trust and confidence build-up</li>
          <li>Innovation</li>
          <li>Transparency</li>
          <li>Teamwork</li>
        </ul>
      </Col>
    </Row>
  );
};

export default BodySectionStyle01;
