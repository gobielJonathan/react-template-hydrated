import { Link } from "react-router-dom";
import Image from "./assets/dummy.png";
import Title from "./components/title";
export default () => {
  return (
    <>
    <Link to={'/login'}>Login</Link>
      <Title>Helo from appjs</Title>
      <img src={Image} alt="" />
    </>
  );
};
