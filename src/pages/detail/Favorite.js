import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteFav, getDataProduct } from "../../slice/ProductSlice";
import {BsCart4} from 'react-icons/bs'


const Favorite = () => {
  const { favorite } = useSelector((state) => state.storeProduct);
  const [jumlahBarang, setJumlahBarang] = useState(1);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataProduct());
  }, [dispatch]);
  const deleteHandle = (e) => {
    dispatch(deleteFav(e));
  };
  console.log("cart ", favorite);
  return (
    <>
      {favorite.length ? (
        <section>
          <div className="container">
            {favorite ? (
              <div className="my-4 p-4 bg-light">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <h4>Products</h4>
                      </th>
                      <th>
                        <h4>Harga</h4>
                      </th>
                      <th>
                        <h4>Jumlah</h4>
                      </th>
                      <th>
                        <h4>Total</h4>
                      </th>
                      <th>
                        <h4>Aksi</h4>
                      </th>
                    </tr>
                  </thead>

                  {favorite.map((data, index) => {
                    console.log('ata ',data)
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>
                            <div
                              className="mb-4 p-2 d-flex gap-30 align-items-center"
                              style={{ width: "25rem", marginRight: "5rem" }}
                            >
                              <img
                                src={data.image}
                                alt={data.title}
                                style={{ width: "6rem" }}
                              />
                              <p>
                                <b>{data.title}</b>
                              </p>
                            </div>
                          </td>
                          <td>
                            <h5 style={{ marginRight: "5rem" }}>
                              {data.price}$
                            </h5>
                          </td>
                          <td>
                            <div
                              className="d-flex align-items-center"
                              style={{ marginRight: "3rem" }}
                            >
                              <button
                                className="px-3"
                                onClick={() => {
                                  if (jumlahBarang > 1) {
                                    setJumlahBarang((e) => e - 1);
                                  }
                                }}
                              >
                                -
                              </button>
                              <button className="px-4 mx-1">
                                {jumlahBarang}
                              </button>
                              <button
                                onClick={() => {
                                  if (jumlahBarang < data.rating.count) {
                                    setJumlahBarang((e) => e + 1);
                                  }
                                }}
                                className="px-3"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td>
                            <h5 style={{ marginRight: "5rem" }}>
                              {data.price}$
                            </h5>
                          </td>
                          <td>
                            <div>
                              <button
                                onClick={() => deleteHandle(data.id)}
                                className="btn btn-danger"
                              >
                                Hapus
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            ) : (
              ""
            )}
            <div className="row bg-light  d-flex align-items-center fs-5 my-4 py-4">
              <div className="col-2">
                <input
                  style={{ transform: "scale(1.9)" }}
                  className="me-2"
                  type="checkbox"
                />
                Pilih Semua
              </div>
              <div className="col-4">hapus</div>
              <div className="col-6 d-flex justify-content-end  align-items-center ">
                
                total (0 produk)
                <div className="btn btn-info ms-4 py-2 px-3 d-flex align-items-center gap-8"> <BsCart4 className="fs-3"/> Masukan Ke Keranjang</div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="container d-flex flex-column align-items-center my-5">
          <img src="images/empty-cart.jpg" style={{ width: "25rem" }} alt="" />
          <h1>Ayok Sayang Belanjaa Nanti Om Kasi Ipon</h1>
        </div>
      )}
    </>
  );
};

export default Favorite;
