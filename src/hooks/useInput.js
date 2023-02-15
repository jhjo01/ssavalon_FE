import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../apis/user";
import { setUserInfo } from "../store/userInfo";
import { useNavigate, useLocation } from "react-router-dom";
import { getDuplication } from "../apis/user";

// 비밀방 입장
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

// 비밀방 생성
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


// 채팅창
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

// 닉네임 생성
export const useValidnickname = (nickname) => {
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
    if (kakaoId === null) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (userInfo.isLogin) {
      navigate("/");
    }
    if (isValid) setDisabled({ check: false, signup: true });
    else setDisabled({ check: true, signup: true });
  }, [isValid, userInfo.isLogin, navigate]);

  const handleCheckNick = async () => {
    if (!isValid) return;
    
    // 중복체크 진행
    const response = await getDuplication(value);

    if (response.data) {
      // 중복
      setIsDupli(true);
    } else {
      // 중복 아님
      setIsDupli(false);
      setDisabled({ check: true, signup: false });
    }
    return;
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    signup({ kakaoId: kakaoId, nickname: value }).then((data) => {
      const userInfo = {
        isLogin: true,
        nickname: data.data.nickname,
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
