import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { saveBlogPost } from "../global/api/Api";
// Validation schema
const validationSchema = Yup.object().shape({
  blogTitle: Yup.string().required("Title required"),
  blogPost: Yup.string().required("Post Details required"),
});
// initial values
const initialValues = {
  blogTitle: "",
  blogPost: "",
};
const PostCreate = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const saveData = {
          blogTitle: values.blogTitle,
          blogPost: values.blogPost,
        };
        //save to db
        saveBlogPost(saveData);
        resetForm();
      }}
    >
      {({ values, setFieldValue, isValid }) => (
        <Form>
          <div className="container">
            <div className="py-2">
              <Link to="/" className="btn btn-warning btn-sm">
                Back to Home page
              </Link>
            </div>
            <div className="form-group row py-5">
              <div className="col-lg-12 py-2">
                <label>Title</label>
                <Field
                  className="form-control"
                  name="blogTitle"
                  placeholder="Blog Title"
                  value={values.blogTitle}
                />
                <div className="text-danger">
                  <ErrorMessage name="blogTitle" />
                </div>
              </div>
              <div className="col-lg-12 py-2">
                <div className="form-group">
                  <label>Body</label>
                  <Field
                    className="form-control"
                    rows="3"
                    name="blogPost"
                    placeholder="Write Blog here"
                    value={values.blogPost}
                  ></Field>
                </div>
                <div className="text-danger">
                  <ErrorMessage name="blogPost" />
                </div>
              </div>
              <div className="col-lg-12 py-2">
                <button
                  className="btn btn-success"
                  type="submit"
                  disabled={!isValid}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PostCreate;
