'use client';
import React, {useState, useEffect} from "react";
import {v4 as uuid} from 'uuid';
import chatStyle from './chat.module.css';
import { SocketIoService } from '@/services/Socketio.service';

const myId = uuid();

const socketio_service = new SocketIoService(myId);

export default function Chat() {

  const [message, setMessage] = useState('');
  //const [messages, setMessages] = useState([]);
  
  var newMessage;
  let my_chat_room = "SALA_DE_CONTROLE";

  const joinRoom = () => {
    socketio_service.joinRoom(my_chat_room);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (message.trim()) {
        newMessage = { 
                id:myId, 
                message, 
                room:my_chat_room
            };
        
            socketio_service.sendMessage(newMessage);
            setMessage('');
        }
  };  

  const handleInputChange = event => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    joinRoom();
  },[]);

  return (
    <div className={chatStyle.container}>
      <form className={chatStyle.form} onSubmit={handleFormSubmit}>
          <input
              className={chatStyle.formField} onChange={handleInputChange}
              placeholder="fala comigo!" type="text" value={message}
          />
      </form>
    </div>
  )
}