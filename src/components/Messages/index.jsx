import React from "react";
import PropTypes from "prop-types";
import { Empty } from "antd";

import { Message } from "../../components";

const Messages = ({ items }) => {
  return items && items.length ? (
    <div>
      <Message
        avatar="https://sun9-49.userapi.com/c206716/v206716893/a0ce4/FKCzMSFI_yg.jpg?ava=1"
        date={"Fri Mar 13 2020 00:25:48 GMT+0300"}
        audio="https://notificationsounds.com/soundfiles/c361bc7b2c033a83d663b8d9fb4be56e/file-sounds-1146-quest.mp3"
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        text="Hello World, how are you?"
        date={"Fri Mar 13 2020 14:25:48 GMT+0300"}
        isReaded={true}
        isMe={true}
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=&water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=3&water"
          }
        ]}
      />
      <Message
        avatar="https://sun9-49.userapi.com/c206716/v206716893/a0ce4/FKCzMSFI_yg.jpg?ava=1"
        isTyping
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        date={"Fri Mar 13 2020 14:25:48 GMT+0300"}
        isReaded={true}
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=4&waternature"
          }
        ]}
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        text="Hello World, how are you?"
        date={"Fri Mar 13 2020 14:25:48 GMT+0300"}
        isReaded={true}
        isMe={true}
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=&water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=3&water"
          }
        ]}
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        text="Hello World, how are you?"
        date={"Fri Mar 13 2020 14:25:48 GMT+0300"}
        isReaded={true}
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=&water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=3&water"
          }
        ]}
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        text="Hello World, how are you?"
        date={"Fri Mar 13 2020 14:25:48 GMT+0300"}
        isReaded={true}
        isMe={true}
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=&water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=3&water"
          }
        ]}
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        text="Hello World, how are you?"
        date={"Fri Mar 13 2020 14:25:48 GMT+0300"}
        isReaded={true}
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        text="Hello World, how are you?"
        date={"Fri Mar 13 2020 14:25:48 GMT+0300"}
        isReaded={true}
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        text="Hello World, how are you?"
        date={"Fri Mar 13 2020 14:25:48 GMT+0300"}
        isReaded={true}
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        text="Hello World, how are you?"
        date={"Fri Mar 13 2020 14:25:48 GMT+0300"}
        isReaded={true}
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        text="Hello World, how are you?"
        date={"Fri Mar 13 2020 14:25:48 GMT+0300"}
        isReaded={true}
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        text="Hello World, how are you?"
        date={"Fri Mar 13 2020 14:25:48 GMT+0300"}
        isReaded={true}
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        text="Hello World, how are you?"
        date={"Fri Mar 13 2020 14:25:48 GMT+0300"}
        isReaded={true}
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        text="Hello World, how are you?"
        date={"Fri Mar 13 2020 14:25:48 GMT+0300"}
        isReaded={true}
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        text="Hello World, how are you?"
        date={"Fri Mar 13 2020 14:25:48 GMT+0300"}
        isReaded={true}
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        text="Hello World, how are you?"
        date={"Fri Mar 13 2020 14:25:48 GMT+0300"}
        isReaded={true}
      />
    </div>
  ) : (
    <Empty description={"Нет сообщений!"} />
  );
};

Messages.propTypes = {
  items: PropTypes.array
};
export default Messages;
