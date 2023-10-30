'use client';

import { ChatCompletionRequestMessageRoleEnum } from 'openai';
//@ts-ignore
import { Widget, addResponseMessage, toggleMsgLoader } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import { useTranslation } from '@/i18n/client';
import { handleCallableFunction } from '@/lib/callableFunctions';
import { createOpenAiChat } from '@/lib/openAiChat';

export const Chatbot = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const chat = createOpenAiChat(
    'You are a friendly assistant chatbot in our online shop with artworks and you offer help to our customers.'
  );

  const handleNewUserMessage = async (
    message: string,
    role: ChatCompletionRequestMessageRoleEnum = ChatCompletionRequestMessageRoleEnum.User,
    functionName?: string
  ) => {
    toggleMsgLoader();

    try {
      const res = await chat.say(message, role, functionName);

      if (res?.functionCall) {
        handleNewUserMessage(
          handleCallableFunction(res.functionCall),
          ChatCompletionRequestMessageRoleEnum.Function,
          res.functionCall.name
        );
      }

      if (res?.content) {
        addResponseMessage(res?.content);
      }
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
      showTimeStamp={false}
    />
  );
};
