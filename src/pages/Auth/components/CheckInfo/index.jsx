import React, { useEffect, useState } from "react";
import { Result, Button } from "antd";

import { userApi } from "utils/api";
import { Block } from "components";

const renderTextInfo = (hash, verified) => {
  if (hash) {
    if (verified) {
      return { status: "success", message: "Аккаунт успешно подтвержден!" };
    } else {
      return {
        status: "errror",
        message: "Ошибка при подддтверждении аккаунта",
      };
    }
  } else {
    return {
      status: "404",
      message: "Ссылка с подтверждением аккаунта отправленна на E-Mail.",
    };
  }
};

const CheckInfo = ({ location, history }) => {
  const [verified, setVerified] = useState(false);
  const hash = location.search.split("hash=")[1];
  const info = renderTextInfo(hash, verified);
  console.log(location);
  useEffect(() => {
    if (hash) {
      userApi.verifyHash(hash).then(({ data }) => {
        if (data.status === "success") {
          setVerified(true);
        }
      });
    }
  });
  return (
    <Block>
      <Result
        status={info.status}
        title="Готово!"
        subTitle={info.message}
        extra={
          info.status === "success" &&
          verified && (
            <Button type={"primary"} onClick={() => history.push("/signin")}>
              Войти
            </Button>
          )
        }
      />
    </Block>
  );
};

export default CheckInfo;
