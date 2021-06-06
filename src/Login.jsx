import React from 'react'
import styles from  "./Login.css"
import Title from "./components/title";

export default () => {
  return (
    <>
      <Title>h1 from login</Title>
      <h1 className={styles['login-title']}>hello</h1>
    </>
  );
};
