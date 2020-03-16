import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { Block } from "../../../components";
import { validateField } from "utils/helpers";

const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props;

  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form
          name="normal_login"
          className="login-form"
          onSubmit={handleSubmit}
        >
          <Form.Item
            validateStatus={validateField("email", touched, errors)}
            help={!touched.email ? null : errors.email}
            hasFeedback
          >
            <Input
              id="email"
              prefix={<UserOutlined className="site-form-item-icon" />}
              size="large"
              placeholder="E-Mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={validateField("password", touched, errors)}
            help={!touched.password ? null : errors.password}
            hasFeedback
          >
            <Input
              id="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              size="large"
              placeholder="Пароль"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item>
            {isSubmitting && !isValid && <span>Ошибка!</span>}
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="login-form-button button"
              onClick={handleSubmit}
            >
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/register">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;
