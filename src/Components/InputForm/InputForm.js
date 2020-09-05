import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField
} from "formik";
import * as Yup from "yup";
import classes from "./InputForm.module.css";
import firebase from "../../firebase";
import moment from "moment";
import { useLocation } from "react-router-dom";
const validationSchema = Yup.object({
  workItem: Yup.string().min(2, "must be 2 characters long"),
  workItemInfo: Yup.string().min(20, "come on! Be more descriptive")
});
const initialValues = {
  workItem: "",
  workItemInfo: ""
};
const InputForm = React.memo(({ setMore }) => {
  const { state: username } = useLocation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const db = firebase.firestore();
        db.collection("calendar-days").add({
          userName: username,
          title: values.workItem,
          workItem: values.workItem,
          workItemInfo: values.workItemInfo,
          start: moment().toDate(),
          end: moment().toDate()
        });
        setMore(last => last + 1);
        resetForm();
      }}
    >
      {({ values, errors, touched, handleSubmit }) => (
        <Form className={classes.Form}>
          <div className={classes.FormControl}>
            <label htmlFor="workItem">Work Item</label>
            <Field id="workItem" type="text" name="workItem" />
            <ErrorMessage name="workItem" />
          </div>
          <div className={classes.FormControl}>
            <label htmlFor="workItemInfo">Work Item Info</label>
            <Field
              as="textarea"
              id="workItemInfo"
              type="text"
              name="workItemInfo"
            />
            <ErrorMessage name="workItemInfo" />
          </div>
          <div className={classes.FormControl}>
            <button onClick={handleSubmit} type="submit">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
});

export default InputForm;
