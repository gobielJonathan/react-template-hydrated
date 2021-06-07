import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Image from "@assets/images/dummy.png";
import Title from "@component/title";
import { AuthContext } from "@context/auth.context";
import usePost from "@hooks/post.hooks";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

export default () => {
  // const { auth, setAuth } = useContext(AuthContext);
  // const {
  //   get: { data, isLoading },
  //   add: { mutateAsync: addPost },
  // } = usePost();

  return (
    <>
      <img src={Image} alt="" />
      <Link to={"/login"}>Login</Link>
      <Title>Helo from appjs 123</Title>
      {/* <button onClick={() => setAuth(!auth)}>toggle auth</button>
      <p>{auth ? "auth" : "not auth"}</p>
      {isLoading && "getting post"}
      <div style={{ height: 300, overflowY: "auto" }}>
        {!isLoading &&
          data?.map(({ id, title, body }) => (
            <React.Fragment key={id}>
              <p>{title}</p>
              <p>{body}</p>
              <hr />
            </React.Fragment>
          ))}
      </div>
      <Formik
        initialValues={{ title: "", body: "" }}
        validationSchema={yup.object().shape({
          title: yup.string().required("title must be required"),
          body: yup.string().required("body must be required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          addPost(values).then(() => setSubmitting(false));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
            <Field type="text" name="body" />
            <ErrorMessage name="body" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik> */}
    </>
  );
};
