import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {
  const [email, setemail] = useState("eve.holt@reqres.in");
  const [password, setpassword] = useState("cityslicka");
  const Auth = useSelector((store) => store.Authreducer);
  const navigate = useNavigate();
  const despatch = useDispatch();
  const location = useLocation();

  console.log(Auth);
  

  const handleLogin = (e) => {
  e.preventDefault()
    despatch(
      login({
        email,
        password,
      })
    );
  };

  useEffect(() => {
    if(Auth.data.isAuth){
      navigate(location.state.pathname)
    }
  }, [Auth.data.isAuth,location,navigate])
  

  return (
    <div className="loginbox">
      <h2>LOGIN</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>User Email</label>
          <br />
          <input data-cy="login-email" type="text" value="eve.holt@reqres.in" onChange={(e) => setemail(e.target.value)}/>
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-cy="login-password" type="password" onChange={(e) => setpassword(e.target.value)}/>
        </div>
        <button type="submit" data-cy="login-submit">
          {Auth.isLoading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
