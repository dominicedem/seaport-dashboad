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
  }, [isAuth, navigate]);
  return isAuth && children;
}

export default Authenticate;
