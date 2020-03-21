import React from "react";

import "./Home.scss";
import Message from "../../components/Message";
import Dialogs from "../../components/Dialogs";

const Home = () => {
  return (
    <section className="home">
      <Dialogs
        userId={1}
        items={[
          {
            _id: "9709e1821b92a0e0ec44589bc1d65dad",
            isReaded: true,
            created_at: "Wed Mar 18 2020 20:07:30 GMT+0300",
            text:
              "Мы все свидетельствуем Вам глуюочайшее наше почтение и целуем Ваши ручкиб дражащий паенька: Михайла, Фёдор, Варвара и Андрюша",
            user: {
              _id: "9709e1821b92a0e0ec44589bc1d65dad",
              fullname: "Фёдор Достоевский",
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
      <Message
        avatar="https://sun9-49.userapi.com/c206716/v206716893/a0ce4/FKCzMSFI_yg.jpg?ava=1"
        date={new Date("Fri Mar 13 2020 00:25:48 GMT+0300")}
        audio="https://notificationsounds.com/soundfiles/c361bc7b2c033a83d663b8d9fb4be56e/file-sounds-1146-quest.mp3"
      />
      {/* <Message
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
