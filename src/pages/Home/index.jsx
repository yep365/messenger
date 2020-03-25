import React from "react";
import {
  TeamOutlined,
  EditOutlined,
  EllipsisOutlined
} from "@ant-design/icons";
import { Input } from "antd";

import "./Home.scss";

import { Message, ChatInput } from "../../components/";
import { Dialogs } from "../../containers";

const Home = () => {
  const { Search } = Input;
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div className="chat__info">
              <TeamOutlined />
              <span>Список диалогов</span>
            </div>
            <EditOutlined />
          </div>
          <div className="chat__sidebar-search">
            <Search
              placeholder="Поиск по контактам"
              onSearch={value => console.log(value)}
              style={{ width: 284 }}
            />
          </div>
          <div className="chat__sidebar-dialogs">
            <Dialogs
              userId={1}
              items={[
                {
                  _id: "42d9007962e459a94dc8b8967f04e37ea",
                  isReaded: true,
                  created_at: "Wed Mar 18 2020 20:07:30 GMT+0300",
                  text:
                    "Мы все свидетельствуем Вам глуюочайшее наше почтение и целуем Ваши ручкиб дражащий паенька: Михайла, Фёдор, Варвара и Андрюша",
                  user: {
                    _id: "42d9007962e459a94dc8b8967f04e37ea",
                    fullname: "Аёдор Достоевский",
                    avatar: null,
                    isOnline: false
                  }
                },
                {
                  _id: "34rssfs29041dfsc830c8f66a76bbd6",
                  created_at: "Wed Mar 18 2020 22 :08:30 GMT+0300",
                  text: "Сегодня прекрасный день, а какая погода у Вас?",
                  user: {
                    _id: "734rssfs29041dfsc830c8f66a76bbd6",
                    fullname: "Александр Пушкин",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: true
                  }
                },
                {
                  _id: "aa0155effac8852f68f49f7a150c6cf0",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "aa0155effac8852f68f49f7a150c6cf0",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "af1a2b2c869de6959e9c21b29c70aae8",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "af1a2b2c869de6959e9c21b29c70aae8",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "cc51f85579e6ba71c221e0662bf62e22",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "cc51f85579e6ba71c221e0662bf62e22",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "2176065f6f51a8fb7a733a30bedaba92",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "2176065f6f51a8fb7a733a30bedaba92",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "454200ce55bea7551a3a724db6307838",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "454200ce55bea7551a3a724db6307838",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "0f5b52afebd9a26a64b0c8438661e495",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "0f5b52afebd9a26a64b0c8438661e495",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "f646eae55460e6de5d16331f75f1a098",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "f646eae55460e6de5d16331f75f1a098",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "3d87611ef9db7194b75e06259f068a7c",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "3d87611ef9db7194b75e06259f068a7c",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "4995eb8167fcb20c4a83049bc6e9c43d",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "4995eb8167fcb20c4a83049bc6e9c43d",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "8788d817db6ec11682416c1c75047dd0",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "8788d817db6ec11682416c1c75047dd0",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "01583ea1c696e64abbbe05b29f94e4ad",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "01583ea1c696e64abbbe05b29f94e4ad",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "21424abff72e701c0581e7c3c5fe733c",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "21424abff72e701c0581e7c3c5fe733c",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "f3fd35c7481e7a7ddda2fe742ea75648",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "f3fd35c7481e7a7ddda2fe742ea75648",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "f2ea63f6c98bf55bf4ea2ea3134a2277",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "f2ea63f6c98bf55bf4ea2ea3134a2277",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "3e3858ca01ab6e891e2d23434d5da74b",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "3e3858ca01ab6e891e2d23434d5da74b",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "ae742211a0486eb3792d1e8f3d6c1e1f",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "ae742211a0486eb3792d1e8f3d6c1e1f",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "87b84a7d1e34260dc9dbba695f4db131",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "87b84a7d1e34260dc9dbba695f4db131",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                },
                {
                  _id: "d5aad7f3981448b4889cb963daeec1cc",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "d5aad7f3981448b4889cb963daeec1cc",
                    fullname: "Пётр 1",
                    avatar:
                      "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                    isOnline: false
                  }
                }
              ]}
            />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-fullname">Александр Пушкин</b>
              <div className="chat__dialog-status">
                <div className="status status--online">online</div>
              </div>
            </div>
            <EllipsisOutlined style={{ fontSize: "23px", color: "#08c" }} />
          </div>
          <div className="chat__dialog-messages">
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
                  url:
                    "https://source.unsplash.com/100x100/?random=4&waternature"
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
          <ChatInput />
        </div>
      </div>
    </section>
  );
};

export default Home;
