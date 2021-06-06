import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Image from "@assets/images/dummy.png";
import Title from "@component/title";
import { getDummy } from "@api/dummy";

export default () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getDummy().then(res => setData(res))
  }, [])

  return (
    <>
      <Link to={'/login'}>Login</Link>
      <Title>Helo from appjs</Title>
      <img src={Image} alt="" />
      {
        data?.map(({id, url}) => (
          <img src={url} alt={url} key={id} />
        ))
      }
    </>
  );
};
