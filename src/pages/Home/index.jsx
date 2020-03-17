import React from "react";

import "./Home.scss";
// import Message from "../../components/Message";
import Dialogs from "../../components/Dialogs";

const Home = () => {
  return (
    <section className="home">
      <Dialogs
        userId={1}
        items={[
          {
            _id: Math.random(),

            message: {
              text:
                "Мы все свидетельствуем Вам глуюочайшее наше почтение и целуем Ваши ручкиб дражащий паенька: Михайла, Фёдор, Варвара и Андрюша",
              isReaded: true,
              created_at: new Date("Tue Mar 15 2020 17:07:30 GMT+0300"),
              user: {
                _id: 1,
                fullname: "Фёдор Достоевский",
                avatar: null,
                isOnline: false
              }
            }
          },
          {
            _id: Math.random(),

            message: {
              text: "Сегодня прекрасный день, а какая погода у Вас?",
              created_at: new Date("Tue Mar 17 2020 19:07:30 GMT+0300"),
              user: {
                _id: 1,
                fullname: "Александр Пушкин",
                avatar:
                  "https://i.pinimg.com/236x/16/66/fb/1666fb793654be52797c25c202811768.jpg",
                isOnline: false
              }
            }
          }
        ]}
      />
      {/* <Message
        avatar="https://sun9-49.userapi.com/c206716/v206716893/a0ce4/FKCzMSFI_yg.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date={new Date("Fri Mar 13 2020 00:25:48 GMT+0300")}
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        text="Hello World, how are you?"
        date={new Date("Fri Mar 13 2020 14:25:48 GMT+0300")}
        isMe={true}
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
        avatar="https://sun9-49.userapi.com/c206716/v206716893/a0ce4/FKCzMSFI_yg.jpg?ava=1"
        isTyping
      />
      <Message
        avatar="https://sun9-14.userapi.com/c851124/v851124397/1d9009/cD2i0BWhMHo.jpg?ava=1"
        date={new Date("Fri Mar 13 2020 14:25:48 GMT+0300")}
        isReaded={true}
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=4&waternature"
          }
        ]}
      /> */}
    </section>
  );
};

export default Home;
