import React from "react";
import { Typography, Result } from "antd";

const CheckEmailInfo = () => {
  return (
    <Result
      status="success"
      title="Готово!"
      subTitle="Регистрация прошла успешно, Вам на E-Mail пришло письмо с подтверждением
    регистрации."
    />
  );
};

export default CheckEmailInfo;
