import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "İsim en az 2 karakter olmalı")
      .required("İsim zorunludur"),
    number: Yup.string()
      .matches(/^[0-9+\- ]+$/, "Geçerli bir numara giriniz")
      .required("Numara zorunludur"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          İsim
          <Field type="text" name="name" placeholder="İsim" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>

        <label className={styles.label}>
          Numara
          <Field type="text" name="number" placeholder="Telefon Numarası" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>

        <button type="submit" className={styles.button}>
          Ekle
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;