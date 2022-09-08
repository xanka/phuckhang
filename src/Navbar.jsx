import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/Pictures/2.png";
function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto mb-5 mb-md-0">
            <nav className="navbar navbar-expand-lg navbar-light">
              <NavLink className="navbar-brand col-6" to="/">
                <img src={logo} alt={'Phuckhang Plastic'}/>
              </NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent">
                <span className="navbar-toggler-icon"/>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                      Trang Chủ
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/service"
                    >
                      Dịch Vụ
                    </NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about"
                    >
                      Về Chúng tôi
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contact"
                    >
                      Liên hệ
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
