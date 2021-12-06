import React from "react";
import Common from "./Common";
import web from "../src/Pictures/img3.png";

function About() {
  return (
    <>
      <Common
        name="Chào mừng bạn đến với"
        imgsrc={web}
        visit="/contact"
        btname="Liên hệ"
        description="Với 15 năm trong ngành ép nhựa, và sửa chữa máy ép Phúc Khang Plastic sẵn sàng mang đến dịch vụ tốt nhất đến quý khách hàng."
      />
    </>
  );
}

export default About;
