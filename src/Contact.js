import React, {useState} from "react";
import { send } from 'emailjs-com';

function Contact() {
  const [toSend, setToSend] = useState({
    full_name: '',
    phone: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_0lna2rd',
      'template_hhkz9o8',
      toSend,
      'user_HmMjIvDG4EkkJt8qof2sX'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };
  
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Liên Hệ Với Chúng Tôi</h1>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6">
            <h3>CÔNG TY TNHH THƯƠNG MẠI PHÚC KHANG PLASTIC</h3>
            <div><b>Địa Chỉ:</b> Thửa đất số 999, Tờ bàn đồ số 142, Khu phố Bình Phước A, Phường Bình Chuẩn, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam.</div>
            <div><b>Số Điện Thoại:</b> 0989558209</div>
          </div>
          <div className="col-md-6">
            <p>Mời bạn điền vào mẫu thư liên lạc và gửi đi cho chúng tôi. Các chuyên viên tư vấn của chúng tôi sẽ trả lời bạn trong thời gian sớm nhất.</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Họ & Tên*"
                  name="full_name"
                  required
                  value={toSend.full_name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group pt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone*"
                  name="phone"
                  required
                  value={toSend.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group pt-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email*"
                  name="reply_to"
                  value={toSend.reply_to}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group pt-3">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Nội dung*"
                  name="message"
                  required
                  value={toSend.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-12 pt-3">
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                >
                  Gửi Thư
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
