// src/FeedbackForm.js
import React, { useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FeedbackForm = () => {
  const handleSubmit = useCallback((values, actions) => {
    console.log('Form submitted:', values);
    actions.resetForm();
  }, []);

  return (
    <div>
      <h2>Форма обратной связи</h2>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Обязательное поле';
          }
          if (!values.email) {
            errors.email = 'Обязательное поле';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Некорректный адрес электронной почты';
          }
          if (!values.message) {
            errors.message = 'Обязательное поле';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="text" name="name" placeholder="Ваше имя" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <Field type="email" name="email" placeholder="Ваш email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <Field as="textarea" name="message" placeholder="Ваше сообщение" />
              <ErrorMessage name="message" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Отправить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FeedbackForm;
