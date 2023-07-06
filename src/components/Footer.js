import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { FaTelegramPlane } from 'react-icons/fa'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-main text-white">
        <div className="container">
          <div className="row py-5 subscribe">
            <div className="col-6 text-white d-flex align-items-center gap-8">
              <FaTelegramPlane className="fs-1"/>
              <span className="fs-2">Belanja Sekarang</span>
            </div>
            <div className="col-6 d-flex align-items-center">
              <div className="input-group d-flex align-items-center p-2">
                <input
                  type="text"
                  className="form-control d-block"
                  placeholder="Email syg . . ."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn text-white btn-outline-success "
                  type="button"
                  id="button-addon2"
                >
                  langganan
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-info">
        <div className="container">
          <div className="row  py-5">
            <div className="col-3">
              <h4>Contact Us</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Indonesia ntb lombok barat.</li>
                <li>+62 8119912718.</li>
                <li>I Love You</li>
              </ul>
              <div className="py-2 d-flex gap-30">
                <Link className="fs-3 text-white"><AiFillFacebook /></Link>
                <Link className="fs-3 text-white"><AiFillInstagram /></Link>
                <Link className="fs-3 text-white"><AiFillTwitterSquare /></Link>
                <Link className="fs-3 text-white"><FaTelegramPlane /></Link>
              </div>
            </div>
            <div className="col-3">
              <h4>Information</h4>
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
            <div className="col-3">
              <h4>Acount</h4>
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
            <div className="col-3">
              <h4>Our App</h4>
              <ul>
                <img src="images/wishlist.svg" alt="" />
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
