import React from "react";
import Card from "./Card";
import img1 from "../src/Pictures/img1.png";
import img2 from "../src/Pictures/img2.png";
import img3 from "../src/Pictures/img3.png";
import img4 from "../src/Pictures/img4.png";
import img5 from "../src/Pictures/img5.png";
import img6 from "../src/Pictures/img6.png";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Chúng tôi cung cấp</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card title="Gia công các mặt hàng nhựa" description="" imgsrc={img1} />
              <Card title="Mua bán máy  ép  nhựa  sửa  chữa  máy  ép" description="" imgsrc={img2} />
              <Card title="Database Management" description="" imgsrc={img3} />
              <Card title="Business Analytics" description="" imgsrc={img4} />
              <Card title="Digital Marketing" description="" imgsrc={img5} />
              <Card title="Video Creation" description="" imgsrc={img6} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
