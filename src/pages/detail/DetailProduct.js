import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataProducts, addTocart, addToFavorive, getDataProduct } from "../../slice/ProductSlice";
import { Link, useParams } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import {MdOutlineFavoriteBorder} from 'react-icons/md'



const DetailProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => DataProducts.selectById(state, id));
  useEffect(()=> {
    dispatch(getDataProduct())
  }, [dispatch])
  const [jumlahProd, setJumlahProd] = useState(1)

  const tambahCartlol = () => {
    dispatch(addTocart(product));

  };
  const tambahFavorite = ()=> {
    dispatch(addToFavorive(product))
  }
  const hanldePlus = ()=> {
    setJumlahProd(jumlahProd + 1)
  }

  return (
    <>
      <div className="detail-product">
        {product ? (
          <div className="container">
            <div className="row my-4 p-2">
              <div className="col-4 d-flex justify-content-center align-items-center">
                <div className="">
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "14rem" }}
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="p-5">
                  <h3>{product.title}</h3>
                  <b>Kategory: </b>
                  <i>{product.category}</i>
                  <br />
                  <div className="bg-light card px-4 py-2 my-4">
                    <div className="d-flex align-items-center gap-8">
                      <div className="d-flex align-items-center gap-8">
                        <del>${product.price}</del>
                        <h4 className="my-0">
                          $
                          {Math.round(
                            product.price - (product.price * 0.2 * 100) / 100
                          )}{" "}
                          -{" "}
                          {Math.round(
                            product.price -
                              (product.price * 0.2 * 100) / 100 +
                              1
                          )}
                        </h4>
                        <button
                          style={{
                            width: "4rem",
                            height: "1.4rem",
                            fontSize: "1rem",
                          }}
                          className="ms-2 justify-content-center align-items-center bg-danger d-flex rounded text-white px-2"
                        >
                          20%
                        </button>
                      </div>
                    </div>
                    <Link className="my-2">Lorem ipsum dolor sit amet.</Link>
                  </div>
                  <div className="d-flex align-items-center">
                    <button className="px-2" onClick={()=> {
                      if(jumlahProd > 1 ){
                        setJumlahProd(()=> jumlahProd - 1)
                      }
                    }}>-</button>
                    <button className="px-4">{jumlahProd}</button>
                    <button className="px-2" onClick={()=> hanldePlus()}>+</button>
                    <span className="ms-2 fs-5">
                      tersisa {product.rating.count - jumlahProd }
                    </span>
                    
                  </div>
                  <div className="d-flex my-4 align-items-center gap-8">
                    <button onClick={()=> tambahCartlol()} className="d-flex align-items-center px-3 bg-secondary text-white rounded-1 py-3 fs-6 mb-0">
                      <BsCartPlus className="fs-2 my-0 me-2" /> Tambahkan prodak
                    </button>
                    <button onClick={()=> tambahFavorite()} className="px-3 bg-secondary text-white rounded-1 py-3 fs-6 mb-0">
                    <MdOutlineFavoriteBorder className="fs-2 my-0 me-2"/>
                    Tambah ke favorite
                  </button>
                    <button className="px-3 bg-secondary text-white rounded-1 py-3 fs-6 mb-0">
                      Beli Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};


export default DetailProduct;
