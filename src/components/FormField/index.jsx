import React from "react";
import { Form, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";

import { validateField } from "utils/helpers";

const FormField = ({
  name,
  placeholder,
  handleBlur,
  handleChange,
  touched,
  errors,
  prefix,
  type,
  values,
}) => {
  return (
    <div>
      <Form.Item
        validateStatus={validateField(name, touched, errors)}
        help={!touched[name] ? null : errors[name]}
        hasFeedback
      >
        <Input
          id="name"
          prefix={prefix}
          size="large"
          placeholder={placeholder}
          value={values[name]}
          type={type}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
    </div>
  );
};

export default FormField;
