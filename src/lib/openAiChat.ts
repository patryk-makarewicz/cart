import {
  ChatCompletionRequestMessage,
  Configuration,
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
  OpenAIApi
} from 'openai';

const parameters: CreateChatCompletionRequest = {
  n: 1,
  top_p: 1,
  temperature: 0.1,
  max_tokens: 256,
  stream: false,
  model: 'gpt-3.5-turbo',
  messages: []
};

const openAiConfig = {
  apiKey: `${process.env.OPENAI_KEY}`,
  parameters
};

const extractFirstChoice = (data: CreateChatCompletionResponse): string | null =>
  data?.choices?.[0]?.message?.content ?? null;

export class OpenAiChat {
  private readonly openai = new OpenAIApi(new Configuration({ apiKey: openAiConfig.apiKey }));
  private readonly messages: ChatCompletionRequestMessage[];

  constructor(system: string) {
    this.messages = [
      {
        role: 'system',
        content: system
      }
    ];
  }

  async say(prompt: string): Promise<string> {
    this.messages.push({
      role: 'user',
      content: prompt
    });

    const { data } = await this.openai.createChatCompletion({
      ...openAiConfig.parameters,
      messages: this.messages
    });

    const s = extractFirstChoice(data) ?? '';

    this.messages.push({
      role: 'assistant',
      content: s
    });

    return s;
  }
}
