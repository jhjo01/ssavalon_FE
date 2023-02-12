import { useState, useEffect } from "react";

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
  const [isDupli, setIsDipli] = useState(false);
  const [disabled, setDisabled] = useState({ "check": true, "signup": true });

  const handleNickChange = (event) => {
    if (event.target.value.length >= 4 && event.target.value.length <= 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setValue(event.target.value);
    setIsDipli(false);
  };

  useEffect(() => {
    if (isValid) setDisabled(false);
    else setDisabled(true);
  }, [isValid]);

  const handleCheckNick = () => {
    setIsDipli(true);
    return;
  }

  const handleSignUp = () => {
    return;
  }

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