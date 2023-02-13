import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../apis/user";
import { setUserInfo } from "../store/userInfo";
import { useNavigate, useLocation } from "react-router-dom";

export const useValidPassword = (password) => {
  const [value, setValue] = useState(password);
  const [isValid, setIsValid] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const handlePasswordChange = (event) => {
    if (event.target.value.length >= 4 && event.target.value.length <= 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setValue(event.target.value);
  };

  useEffect(() => {
    if (isValid) setDisabled(false);
    else setDisabled(true);
  }, [isValid]);

  return {
    value,
    isValid,
    disabled,
    handlePasswordChange,
  };
};

export const useValidTitleAndPassword = (roomInfo, roomValid) => {
  const [value, setValue] = useState(roomInfo);
  const [isValid, setIsValid] = useState(roomValid);
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleInputChange = (event) => {
    if (event.target.value.length >= 4 && event.target.value.length <= 8) {
      setIsValid({ ...value, [event.target.name]: true });
    } else {
      setIsValid({ ...value, [event.target.name]: false });
    }
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleCheckedChange = () => {
    setChecked(!checked);
    if (!checked) {
      setIsValid({ ...value, [value.password]: false });
    }
  };

  useEffect(() => {
    if (isValid.title && isValid.password) setDisabled(false);
    else if (isValid.title && !checked) setDisabled(false);
    else setDisabled(true);

    return () => {};
  }, [isValid, checked]);

  useEffect(() => {
    if (!checked) setValue((value) => ({ ...value, password: "" }));
  }, [checked]);

  return {
    value,
    isValid,
    checked,
    disabled,
    handleInputChange,
    handleCheckedChange,
  };
};

export const useValidMessage = (message) => {
  const [value, setValue] = useState(message);
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleInputReset = () => {
    setValue("");
  };

  return {
    value,
    handleInputReset,
    handleInputChange,
  };
};

export const useValidNickName = (nickname) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => {
    return state.user;
  });

  const [kakaoId] = useState(useLocation().state);

  const [value, setValue] = useState(nickname);
  const [isValid, setIsValid] = useState(false);
  const [isDupli, setIsDupli] = useState(false);
  const [disabled, setDisabled] = useState({ check: true, signup: true });

  const handleNickChange = (event) => {
    if (event.target.value.length >= 4 && event.target.value.length <= 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setValue(event.target.value);
    setIsDupli(false);
  };

  useEffect(() => {
    if (userInfo.isLogin) {
      navigate("/");
    }
    if (isValid) setDisabled({ check: false, signup: true });
    else setDisabled({ check: false, signup: true });
  }, [isValid, userInfo.isLogin]);

  const handleCheckNick = async () => {
    if (!isValid) return;

    // 중복체크 진행
    const response = await axios.get(
      `https://i8b305.p.ssafy.io:8000/user-service/oauth/duplication/${value}`
    );
    console.log(response.data);

    if (response.data) {
      // 중복
      setIsDupli(true);
    } else {
      // 중복 아님
      setIsDupli(false);
      setDisabled({ check: false, signup: false });
    }
    return;
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    signup({ kakaoId: kakaoId, nickname: value }).then((data) => {
      const userInfo = {
        isLogin: true,
        nickName: data.data.nickname,
        refreshToken: data.data.refreshToken,
      };
      dispatch(setUserInfo(userInfo));
      navigate("/");
    });
  };

  return {
    value,
    isValid,
    isDupli,
    disabled,
    handleNickChange,
    handleCheckNick,
    handleSignUp,
  };
};
