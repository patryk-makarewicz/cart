import { ChatCompletionRequestMessageFunctionCall } from 'openai';

export enum CallableFunction {
  GetInformation = 'getInformation'
}

export enum GetInformationKind {
  OpeningHours = 'opening-hours',
  StationaryShop = 'stationary-shop'
}

interface GetInformationProperties {
  kind: GetInformationKind;
}

const getInformation = ({ kind }: GetInformationProperties): string => {
  switch (kind) {
    case GetInformationKind.OpeningHours:
      return `We are open 24h`;
    case GetInformationKind.StationaryShop:
      return `We don't have a stationary store, you are only an online store.`;
    default:
      throw new Error('Unknown kind of information');
  }
};

export const handleCallableFunction = (call: ChatCompletionRequestMessageFunctionCall): string => {
  try {
    switch (call.name as CallableFunction) {
      case CallableFunction.GetInformation:
        return getInformation(JSON.parse(call.arguments ?? 'null') as GetInformationProperties);

      default:
        throw new Error('Unknown function name.');
    }
  } catch (e) {
    return (e as Error).message;
  }
};
