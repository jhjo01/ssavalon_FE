import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { signup } from "../apis/user";

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
  const [value, setValue] = useState(nickname);
  const [isValid, setIsValid] = useState(false);
  const [isDupli, setIsDupli] = useState(false);
  const [disabled, setDisabled] = useState({ check: true, signup: true });

  const kakaoId = useSelector((state) => {
    return state.login.kakaoId;
  });

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
    if (isValid) setDisabled({ check: false, signup: true });
    else setDisabled({ check: false, signup: true });
  }, [isValid]);

  const handleCheckNick = async () => {
    if (!isValid) return;

    // 중복체크 진행
    const response = await axios.get(
      `https://3.36.97.158:8000/user-service/oauth/duplication/${value}`
    );

    console.log(response);

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

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = new FormData();
    form.append("kakaoId", kakaoId);
    form.append("nickname", value);

    const res = signup(form);
    console.log(res);
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
