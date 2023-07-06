import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { DataProducts, getDataProduct } from "./../slice/ProductSlice";
import { Link, useNavigate } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import { BiArrowBack } from "react-icons/bi";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(DataProducts.selectAll);
  const { kategory, dataLoginUser } = useSelector((state) => state.storeProduct);

  const [boolLog, setBoolLog] = useState(true);
  useEffect(() => {
    dispatch(getDataProduct());
  }, [dispatch]);

  const [halamanSekarang, setHalamanSekarang] = useState(1);
  let jumlahProdukPerHalaman = 8;
  let totalProduct = products.length;
  let jumlahHalaman = Math.ceil(totalProduct / jumlahProdukPerHalaman);

  const dataStorage = localStorage.getItem("user");
  const data = JSON.parse(dataStorage);
  const navigate = useNavigate()

    if (data === null) {
      if(boolLog){
        navigate('/login', {replace:  true})
        
        setBoolLog(false)
      }else{
        localStorage.setItem('user', JSON.stringify(dataLoginUser))
      }
  
    } 

  



  const ProductFilter = (hal, productsFil, kategor) => {
    let indexawal = (hal - 1) * jumlahProdukPerHalaman;
    let indexakhir = indexawal + jumlahProdukPerHalaman;
    let filteredProducts;
    if (kategor !== "") {
      filteredProducts = productsFil.filter(
        (product) => product.category === kategory
      );
    }
    const productFilter = filteredProducts.slice(indexawal, indexakhir);

    return (
      <div>
        <div className="d-flex flex-wrap gap-30 justify-content-evenly">
          {productFilter.map((data, index) => {
            return (
              <div key={index} className="handle-hover">
                <Link to={`/detail/${data.id}`}>
                  <div
                    className="card card-hover p-5 d-flex align-items-center justify-content-center"
                    style={{ width: "15rem", height: "17rem" }}
                  >
                    <img
                      src={data.image}
                      className="card-img-top"
                      alt={data.title}
                      style={{ width: "8rem", background: "transparent" }}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const ProductPerHalaman = (halaman, prod) => {
    let indexawal = (halaman - 1) * jumlahProdukPerHalaman;
    let indexAkhir = indexawal + jumlahProdukPerHalaman;

    let totalProductTampil = prod.slice(indexawal, indexAkhir);

    return (
      <div>
        <div className="d-flex flex-wrap gap-30 justify-content-evenly">
          {totalProductTampil.map((data, index) => {
            return (
              <div key={index} className="handle-hover">
                <Link to={`/detail/${data.id}`}>
                  <div
                    className="card card-hover p-5 d-flex align-items-center justify-content-center"
                    style={{ width: "15rem", height: "17rem" }}
                  >
                    <img
                      src={data.image}
                      className="card-img-top"
                      alt={data.title}
                      style={{ width: "8rem", background: "transparent" }}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const handleNextProducts = () => {
    if (halamanSekarang < jumlahHalaman) {
      setHalamanSekarang(halamanSekarang + 1);
    }
  };
  const handleBackProducts = () => {
    if (halamanSekarang > 1) {
      setHalamanSekarang(halamanSekarang - 1);
    }
  };

  return (
    <>
      <section className="home-wrapper-1 mt-2">
        <div className="container">
          <div className="row">
            <div className="col-6 main-banner">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 4000 }}
                loop={true}
                speed={2000}
              >
                <SwiperSlide>
                  <img
                    src="images/main-banner-1.jpg"
                    alt="banner-1"
                    style={{ width: "40rem" }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="images/main-banner.jpg"
                    alt="banner"
                    style={{ width: "40rem" }}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-3">
              <div className="my-auto">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{ delay: 1500 }}
                  loop={true}
                  speed={3000}
                  className="my-2"
                >
                  <SwiperSlide>
                    <img
                      src="images/catbanner-01.jpg"
                      alt="banner-1"
                      style={{ width: "19rem" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="images/catbanner-02.jpg"
                      alt="banner"
                      style={{ width: "19rem" }}
                    />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{ delay: 4500 }}
                  loop={true}
                  speed={3000}
                >
                  <SwiperSlide>
                    <img
                      src="images/catbanner-03.jpg"
                      alt="banner-1"
                      style={{ width: "19rem" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="images/catbanner-04.jpg"
                      alt="banner"
                      style={{ width: "19rem" }}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-3">
              <div className="my-auto">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  speed={3000}
                  className="my-2"
                >
                  <SwiperSlide>
                    <img
                      src="images/catbanner-01.jpg"
                      alt="banner-1"
                      style={{ width: "19rem" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="images/catbanner-02.jpg"
                      alt="banner"
                      style={{ width: "19rem" }}
                    />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{ delay: 6000 }}
                  loop={true}
                  speed={3000}
                >
                  <SwiperSlide>
                    <img
                      src="images/catbanner-03.jpg"
                      alt="banner-1"
                      style={{ width: "19rem" }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="images/catbanner-04.jpg"
                      alt="banner"
                      style={{ width: "19rem" }}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2">
        {kategory === "All Products" ? (
          <div className="container">
            <h2>All Products</h2>
            <div className="row my-3">
              <div className="col-12">
                <div className="">
                  {ProductPerHalaman(halamanSekarang, products)}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <h2>{kategory}</h2>
            <div className="row my-3">
              <div className="col-12">
                <div className="">
                  {ProductFilter(halamanSekarang, products, kategory)}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="my-4">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center gap-8">
            <h4
              style={{ cursor: "pointer" }}
              onClick={handleBackProducts}
              className="border py-1 px-3 rounded-2"
            >
              <BiArrowBack />
            </h4>
            <div className="py-1 d-flex align-items-center px-4 gap-8">
              <h4 className="my-0">{halamanSekarang}</h4>
              dari
              <h4 className="my-0"> {jumlahHalaman}</h4>
            </div>
            <h4
              style={{ cursor: "pointer" }}
              onClick={handleNextProducts}
              className="border py-1 px-3 rounded-2"
            >
              <GrLinkNext />
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
