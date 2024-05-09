// import AppLayout from "./AppLayout";
// import ErrorRoute from "../Error/ErrorRoute";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Authenticate({ children }) {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.appData);
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });
  return isAuth && children;
}

export default Authenticate;
