import { Col, Row } from "antd";
import Image from "next/image";

const BodySectionStyle01 = () => {
  return (
    <>
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
      <Row justify="center" className="bg-sky-50 py-12">
        <Col span={21}>
          <div className="w-full pt-2 text-3xl">
            <h2 className="font-black text-center text-sky-500 ">
              We believe In ...
            </h2>
          </div>{" "}
        </Col>
        <Col xs={16} sm={7}>
          <div className="grid grid-flow-col gap-2">
            <div
              style={{ width: 50, height: 50 }}
              className=" relative bg-[#ed1c24] "
            >
              <Image
                layout="fill"
                src="/Icons/WeBelieveIn/collective_01.png"
                alt="We believe in"
              ></Image>
            </div>
            <div className="">Collective responsibility and leadership</div>
          </div>
        </Col>
        {/* sm={4} md={6} lg={8} xl={10} */}
        <Col xs={16} sm={7}>
          <div className="grid grid-flow-col gap-2">
            <div
              style={{ width: 50, height: 50 }}
              className="bg-[#f8ed3b] relative "
            >
              <Image
                layout="fill"
                src="/Icons/WeBelieveIn/professionalism.png"
                alt="We believe in"
              ></Image>
            </div>
            <div className="">Professionalism and ethics</div>
          </div>
        </Col>
        <Col xs={16} sm={7}>
          <div className="grid grid-flow-col gap-2">
            <div
              style={{ width: 50, height: 50 }}
              className="p-4 bg-[#37b24a] relative"
            >
              <Image
                layout="fill"
                src="/Icons/WeBelieveIn/addingValue.png"
                alt="We believe in"
              ></Image>
            </div>
            <div className="">Adding values to our client&apos;s needs</div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BodySectionStyle01;
