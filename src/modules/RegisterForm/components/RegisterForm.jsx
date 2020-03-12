import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Block } from "../../../components";

const RegisterForm = () => {
  const onFinish = values => {
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="mail"
            validateStatus="success"
            hasFeedback
            rules={[{ required: true, message: "Please input your E-Mail!" }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="E-Mail"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="username"
              size="large"
              placeholder="Ваше имя"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              size="large"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              size="large"
              placeholder="Повторите пароль"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="login-form-button button"
            >
              Зарегистрироваться
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/login">
            Войти в аккаунт
          </Link>
        </Form>
      </Block>
    </div>
  );
};

export default RegisterForm;
