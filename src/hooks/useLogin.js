import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export const useCheckLogin = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.isLogin);

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
      return;
    }
  }, [isLogin, navigate]);
};
