import React from "react";
import logo from "../src/Pictures/logo-footer.png";
import {NavLink} from "react-router-dom";

const Footer = () =>
{
    return (
        <>
            <footer className={'footer'}>
                <div className={'container-fluid bg-light pt-5 pb-5'}>
                    <div className={'row'}>
                        <div className={'col-10 mx-auto row'}>
                            <div className={'col-6 col-sm-4 align-self-center'}>
                                <img src={logo} alt={'Phuckhang Plastic'}/>
                            </div>
                            <div className={'col-6 col-sm-8'}>
                                <h3>CÔNG TY TNHH THƯƠNG MẠI <strong className={'brand-name'}>PHUC KHANG PLASTIC</strong></h3>
                                <div><b>Địa Chỉ:</b> Thửa đất số 999, Tờ bàn đồ số 142, Khu phố Bình Phước A, Phường Bình Chuẩn, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam.</div>
                                <div><b>Số Điện Thoại:</b> 0989558209 - Mr. Sơn</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export  default  Footer;
