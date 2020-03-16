import React from "react";

import "./Home.scss";
// import Message from "../../components/Message";
import DialogItem from "../../components/DialogItem";

const Home = () => {
  return (
    <section className="home">
      <div className="dialogs">
        <DialogItem />
      </div>
      {/* <Dialogs
        itmes={[
          {
            user: {
              fullname: "Фёдор Достоевский",
              avatar: null
            },
            message: {
              text:
                "Мы все свидетельствуем Вам глуюочайшее наше почтение и целуем Ваши ручкиб дражащий паенька: Михайла, Фёдор, Варвара и Андрюша",
              isReaded: false,
              created_at: new Date(0)
            }
          }
        ]}
      /> */}
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
