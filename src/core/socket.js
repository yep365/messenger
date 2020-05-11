import io from "socket.io-client";

const socket = io("https://messenger-for-kpres.herokuapp.com/");

export default socket;
