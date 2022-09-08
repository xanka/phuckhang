import React from "react";
import { NavLink } from "react-router-dom";

function Common({ name, imgsrc, visit, btname, description ='' }) {
  return (
    <>
      <section id="header" className="align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {name}
                    <strong className="brand-name"> Phúc Khang Plastic. </strong>
                  </h1>

                  <h2 className="my-3">
                    Công ty chuyên ép nhựa, gia công các mặt hàng nhựa, phụ kiện giầy da, chân ghế sô pha các  mặt  hàng  nhựa  gia dụng. Cung cấp  các  mặt  hàng  về  nghành  ép  nhựa,  mua bán máy  ép  nhựa  sửa  chữa  máy  ép.
                    <br></br>
                    {description}
                  </h2>

                  <div className="mt-3">
                    <NavLink to={visit} className="btn-get-started">
                      {btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={imgsrc}
                    className="img-fluid animated"
                    alt="HomeImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
