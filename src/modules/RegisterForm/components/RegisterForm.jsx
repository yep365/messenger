import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";

import { Button, Block, FormField } from "components";
import { validateField } from "utils/helpers";

const success = false;

const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form onSubmit={handleSubmit} className="register-form">
            <FormField
              name="email"
              placeholder="E-mail"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
              prefix={<MailOutlined className="site-form-item-icon" />}
            />
            <FormField
              name="fullname"
              placeholder="Ваше имя"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
            <FormField
              name="password"
              placeholder="Пароль"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
              type="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />

            <FormField
              name="password_2"
              placeholder="Пароль"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
              type="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
            <Form.Item>
              {isSubmitting && !isValid && <span>Ошибка!</span>}
              <Button
                disabled={isSubmitting}
                onClick={handleSubmit}
                type="primary"
                size="large"
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/signin">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone style={{ fontSize: "50px" }} />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
            <Link className="auth__register-link" to="/signin">
              Войти в аккаунт
            </Link>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
