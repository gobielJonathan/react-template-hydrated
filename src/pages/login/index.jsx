import React from 'react'
import styles from  "./index.css"
import Title from "@component/title";

export default function Login() {
  return (
    <>
      <Title>h1 from login</Title>
      <h1 className={styles['login-title']}>hello</h1>
    </>
  );
};
