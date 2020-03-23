import React from "react";
import {
  TeamOutlined,
  EditOutlined,
  EllipsisOutlined
} from "@ant-design/icons";
import { Input } from "antd";

import "./Home.scss";

import { Message, ChatInput, Dialogs } from "../../components/";

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
                  _id: "42jjsdaja;lfafsc830c8f66a76bbd6",
                  created_at: "Fri Mar 13 2020 19:07:30 GMT+0300",
                  text: "А как Вы поживаете, господин?",
                  user: {
                    _id: "42jjsdaja5lfafsc830c8f66a76bbd6",
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
