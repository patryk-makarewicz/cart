'use client';

import { lngProps } from '@/app/[lng]/page';
import { useTranslation } from '@/app/i18n/client';
import { OpenAiChat } from '@/lib/openAiChat';
import { Widget, addResponseMessage, toggleMsgLoader } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

export const Chatbot = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
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

  return (
    <Widget
      title={t('chat.title')}
      subtitle={t('chat.subtitle')}
      senderPlaceHolder={t('chat.senderPlaceholder')}
      handleNewUserMessage={handleNewUserMessage}
    />
  );
};
