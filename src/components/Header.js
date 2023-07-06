import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaUserGear } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { addTocategory, apusAkun, getDataProduct } from "../slice/ProductSlice";

const Header = ({ cartCount, hanldeDepan, favorite }) => {
  const { dataLoginUser } = useSelector((state) => state.storeProduct);

  const [state, setState] = useState("All Products");
  const [boolLogin, setBoolLogin] = useState(false)
  const handleButton = (e) => {
    setState(e.target.value);
  };
  const [value, setValue] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTocategory(state));
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue('')
    if (value !== null) {
      dispatch(getDataProduct(value));
    }
  };
  const hanldeLogin = () => {
    setBoolLogin(!boolLogin)
  };

  const hapusAkun = ()=> {
    dispatch(apusAkun(''))
    localStorage.removeItem('user')
  }

  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Gratis Ongkir Jika Pembelian Lebih Dari Rp:50.000
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Kenyamanan anda yang paling penting
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-main py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">E Tembeli.</Link>
              </h2>
            </div>
            <div className="col-5">
              <form onSubmit={(e) => handleSubmit(e)} className="input-group">
                <input
                  onChange={(e) => setValue(e.target.value)}
                  type="text"
                  className="form-control py-2"
                  placeholder="Tembeli . . ."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={value}
                />
                <button className="input-group-text" id="basic-addon2">
                  <VscSearch className="fs-4" />
                </button>
              </form>
            </div>
            <div className="col-5">
              <header className="header-main-links d-flex gap-30 align-items-center justify-content-end">
                <div>
                  <Link
                    to={"/favorite"}
                    className="d-flex align-items-center gap-8 text-white"
                  >
                    <MdOutlineFavoriteBorder className="fs-1 text-warning" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark fs-6">
                        {favorite.length}
                      </span>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    to={"/store"}
                    className="d-flex align-items-center gap-8 text-white"
                  >
                    <BsCart4 className="fs-1 text-warning" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark fs-6">
                        {cartCount.length}
                      </span>
                    </div>
                  </Link>
                </div>
                <div>
                  <div
                    onClick={hanldeLogin}
                    className="d-flex align-items-center flex-column text-end text-white"
                  >
                    <FaUserGear className="fs-1" />
                    <p className="my-0 fs-5">{dataLoginUser.nama}</p>
                    {boolLogin ? (
                      <div className="login-hover">
                        <button onClick={hapusAkun} className="bg-danger px-2 py-1 text-white">
                          hapus akun
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="d-flex align-items-center gap-8 btn bg-transparent btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <TbCategory className="fs-3" />
                      Kategory{" "}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button
                          onClick={(e) => handleButton(e)}
                          value="All Products"
                          className="dropdown-item text-white"
                          href="#"
                        >
                          All Products
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={(e) => handleButton(e)}
                          value="men's clothing"
                          className="dropdown-item text-white"
                          href="#"
                        >
                          men's clothing
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={(e) => handleButton(e)}
                          value="jewelery"
                          className="dropdown-item text-white"
                          href="#"
                        >
                          jewelery
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={(e) => handleButton(e)}
                          value="electronics"
                          className="dropdown-item text-white"
                          href="#"
                        >
                          electronics
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={(e) => handleButton(e)}
                          value="women's clothing"
                          className="dropdown-item text-white"
                          href="#"
                        >
                          women's clothing
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-8">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
