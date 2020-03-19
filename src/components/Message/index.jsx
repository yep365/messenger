import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import SoundWave from "../../assets/img/SoundWave.svg";
import Pause from "../../assets/img/pause.svg";
import Play from "../../assets/img/play.svg";

import Time from "../Time";
import "./Message.scss";
import IconReaded from "../IconReaded";

const Message = ({
  avatar,
  audio,
  user,
  text,
  date,
  isMe,
  isReaded,
  attachments,
  isTyping
}) => {
  const [isPlaying, setisPlaying] = useState(false);

  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
        "message--image": attachments && attachments.length === 1,
        "message--is--audio": audio
      })}
    >
      <div className="message__content">
        <IconReaded isMe={isMe} isReaded={isReaded} />
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className="message__info">
          {(text || isTyping || audio) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {audio && (
                <div className="message__audio">
                  <div
                    className="message__audio-progress"
                    style={{ width: "100%" }}
                  ></div>
                  <div className="message__audio-info">
                    <div className="message__audio-btn">
                      <button>
                        {isPlaying ? (
                          <img src={Pause} alt="Pause" />
                        ) : (
                          <img src={Play} alt="Play" />
                        )}
                      </button>
                    </div>
                    <div className="message__audio-wave">
                      <img src={SoundWave} alt="Sound Wave" />
                    </div>
                    <span className="message__audio-duration">00:19</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map(item => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
            </div>
          )}

          {date && (
            <span className="message__date">{/* <Time date={date} /> */}</span>
          )}
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {}
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  audio: PropTypes.string
};

export default Message;
