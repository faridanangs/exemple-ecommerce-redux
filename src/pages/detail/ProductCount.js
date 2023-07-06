import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getDataProduct } from "../../slice/ProductSlice";

const ProductCount = () => {
  const { cart } = useSelector((state) => state.storeProduct);
  const [jumlahBarang, setJumlahBarang] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataProduct());
  }, [dispatch]);
  const deleteHandle = () => {
    dispatch(deleteCart(cart[0].id));
  };
  return (
    <>
      {cart.length ? (
        <section>
          <div className="container">
            {cart ? (
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

                  {cart.map((data, index) => {
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
                                onClick={() => deleteHandle()}
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
              <div className="col-1">hapus</div>
              <div className="col-3">Masukan ke favorite</div>
              <div className="col-6 d-flex justify-content-end  align-items-center ">
                total (0 produk) <h4 className="my-0 ms-1">$0.00</h4>
                <div className="btn btn-info ms-4 py-2 px-3">Checkout</div>
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

export default ProductCount;
