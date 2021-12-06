import React from "react";
import Common from "./Common";
import web from "../src/Pictures/img2.png";

function Home() {
  return (
    <>
      <Common
        name="Phát triển doanh nghiệp của bạn với"
        imgsrc={web}
        visit="/service"
        btname="Liên Hệ"
      />
    </>
  );
}

export default Home;
