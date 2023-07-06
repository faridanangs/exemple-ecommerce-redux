import  { useState } from "react";
import { loginUser } from "../slice/ProductSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
const dispatch = useDispatch()

  const [nama, setNama] = useState(null);
  const [past, setPast] = useState(null);

  
const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
   dispatch(loginUser({nama, past}))
   setNama('')
   setPast('')

  };

  return (
    <>
    <div className="container my-5">
      <h3>Form Login</h3>
      <p className="mb-5">jangan masukan data sensitive ini tersimpan di localStorage dan ini web latihan</p>
      <form
        onSubmit={handleSubmit}
        className="row g-3 needs-validation"
        novalidate
      >
        <div>
          <div className="col-md-4 position-relative d-flex">
            <label className="form-label">
              name
              <input
                type="text"
                className="form-control"
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </label>
          </div>
          <div className="col-md-4 position-relative">
            <label className="form-label">
              pastword
              <input
                type="text"
                className="form-control"
                required
                value={past}
                onChange={(e) => setPast(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            login
          </button>
        </div>
      </form>
    </div>
    
    </>
  );
};

export default Login;
