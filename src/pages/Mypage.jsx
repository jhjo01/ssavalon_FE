import Header from "../components/header/Header";
import MypageInfo from "../components/mypage/MypageInfo";
import { useCheckLogin } from "./../hooks/useLogin";

const Mypage = () => {
  useCheckLogin();
  return (
    <>
      <Header />
      <MypageInfo />
    </>
  );
};

export default Mypage;
