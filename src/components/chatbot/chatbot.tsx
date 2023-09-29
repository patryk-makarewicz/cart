'use client';

import { OpenAiChat } from '@/lib/openAiChat';
import { Widget, addResponseMessage, toggleMsgLoader } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

export const Chatbot = () => {
  const chat = new OpenAiChat('You are a friendly artworks chatbot and you offer help to our customers.');

  const handleNewUserMessage = async (message: string) => {
    toggleMsgLoader();

    try {
      const res = await chat.say(message);
      addResponseMessage(res);
    } finally {
      toggleMsgLoader();
    }
  };

  return <Widget title="Artworks bot" subtitle="W czym mogę Ci pomóc" handleNewUserMessage={handleNewUserMessage} />;
};
