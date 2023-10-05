import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageFunctionCall,
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
  OpenAIApi
} from 'openai';
import { CallableFunction, GetInformationKind } from './callableFunctions';

export type ChatResponse = null | {
  content: null | string;
  functionCall: null | ChatCompletionRequestMessageFunctionCall;
};

const parameters: CreateChatCompletionRequest = {
  n: 1,
  top_p: 1,
  temperature: 0.1,
  max_tokens: 256,
  stream: false,
  model: 'gpt-3.5-turbo',
  messages: [],
  functions: [
    {
      name: CallableFunction.GetInformation,
      description: 'Get artworks shop information when the user asks for it.',
      parameters: {
        type: 'object',
        properties: {
          kind: {
            type: 'string',
            description: 'Type of information to get.',
            enum: [GetInformationKind.OpeningHours, GetInformationKind.StationaryShop]
          }
        }
      }
    }
  ]
};

const openAiConfig = {
  apiKey: `${process.env.OPENAI_KEY}`,
  parameters
};

const extractFirstChoice = (data: CreateChatCompletionResponse): ChatResponse => {
  const firstChoice = data?.choices?.[0]?.message;

  if (!firstChoice) {
    return null;
  }

  return {
    content: firstChoice.content ?? null,
    functionCall: firstChoice.function_call ?? null
  };
};

export const createOpenAiChat = (system: string) => {
  const openai = new OpenAIApi(
    new Configuration({
      apiKey: openAiConfig.apiKey
    })
  );

  const messages: ChatCompletionRequestMessage[] = [
    {
      role: 'system',
      content: system
    }
  ];

  const say = async (
    prompt: string,
    role: ChatCompletionRequestMessageRoleEnum = ChatCompletionRequestMessageRoleEnum.User,
    functionName?: string
  ): Promise<ChatResponse> => {
    messages.push({
      role,
      content: prompt,
      name: functionName
    });

    const { data } = await openai.createChatCompletion({
      ...openAiConfig.parameters,
      messages
    });

    const s = extractFirstChoice(data);

    if (s?.content) {
      messages.push({
        role: 'assistant',
        content: s.content
      });
    }

    return s;
  };

  return {
    say
  };
};
