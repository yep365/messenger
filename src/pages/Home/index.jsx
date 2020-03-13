import React from "react";

import "./Home.scss";
import Message from "../../components/Message";

const Home = () => {
  return (
    <section className="home">
      <Message
        avatar="https://sun9-49.userapi.com/c206716/v206716893/a0ce4/FKCzMSFI_yg.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date={new Date("Fri Mar 13 2020 00:25:48 GMT+0300")}
      />
    </section>
  );
};

export default Home;
