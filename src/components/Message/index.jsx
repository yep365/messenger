import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Popover, Button } from "antd";
import { EllipsisOutlined, EyeOutlined } from "@ant-design/icons";
import { Emoji } from "emoji-mart";
import reactStingReplace from "react-string-replace";

import { convertCurrentTime, isAudio } from "../../utils/helpers";

import SoundWave from "../../assets/img/SoundWave.svg";
import Pause from "../../assets/img/pause.svg";
import Play from "../../assets/img/play.svg";

import { Time, IconReaded, Avatar } from "../";

import "./Message.scss";

const MessageAudio = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    audioRef.current.addEventListener(
      "playing",
      () => {
        setIsPlaying(true);
      },
      false
    );
    audioRef.current.addEventListener(
      "ended",
      () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      },
      false
    );
    audioRef.current.addEventListener(
      "pause",
      () => {
        setIsPlaying(false);
      },
      false
    );

    audioRef.current.addEventListener("timeupdate", () => {
      const duration = (audioRef.current && audioRef.current.duration) || 0;
      setCurrentTime(audioRef.current.currentTime);
      setProgress((audioRef.current.currentTime / duration) * 100);
    });
  }, []);

  const togglePlay = () => {
    audioRef.current.volume = "0.8";
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="message__audio">
      <audio ref={audioRef} src={audioSrc} preload="auto" />
      <div
        className="message__audio-progress"
        style={{ width: progress + "%" }}
      ></div>
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlay}>
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
        <span className="message__audio-duration">
          {convertCurrentTime(currentTime)}
        </span>
      </div>
    </div>
  );
};

const Message = ({
  avatar,
  audio,
  user,
  text,
  date,
  isMe,
  readed,
  attachments,
  isTyping,
  onRemoveMessage,
  setPreviewImage,
  setLinkOnAttachment,
}) => {
  const renderAttachment = (item) => {
    if (item.ext !== "webm") {
      return (
        <div
          key={item._id}
          onClick={() => {
            setPreviewImage(item.url);
            setLinkOnAttachment(item.url);
          }}
          className="message__attachments-item"
        >
          <div className="message__attachments-item-overlay">
            <EyeOutlined style={{ color: "white", fontSize: "18px" }} />
          </div>

          <img src={item.url} alt={item.filename} />
        </div>
      );
    } else {
      return <MessageAudio key={item._id} audioSrc={item.url} />;
    }
  };

  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": !!isTyping,
        "message--image":
          !isAudio(attachments) &&
          attachments &&
          attachments.length === 1 &&
          !text,
        "message--is--audio": isAudio(attachments),
      })}
    >
      <div className="message__content">
        <IconReaded isMe={isMe} isReaded={readed} />

        <div className="message__icon-actions">
          <Popover
            placement="left"
            content={
              <div>
                <Button onClick={onRemoveMessage}>Удалить сообщение</Button>
              </div>
            }
            trigger="click"
          >
            <EllipsisOutlined style={{ fontSize: "15px", color: "#08c" }} />
          </Popover>
        </div>

        <div className="message__avatar">
          <Avatar user={user} />
        </div>
        <div className="message__info">
          {(text || isTyping || audio) && (
            <div className="message__bubble">
              {text && (
                <p className="message__text">
                  {reactStingReplace(text, /:(.+?):/g, (match, i) => (
                    <Emoji key={i} emoji={match} set="apple" size="18" />
                  ))}
                </p>
              )}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {audio && <MessageAudio audioSrc={audio} />}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map((item) => renderAttachment(item))}
            </div>
          )}

          {date && (
            <span className="message__date">
              <Time date={date} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
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
  audio: PropTypes.string,
};

export default Message;
