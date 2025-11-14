import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';

export const maxDuration = 60;

export async function POST(req: Request) {
  const {
    messages,
    model,
    webSearch,
  }: {
    messages: UIMessage[];
    model: string;
    webSearch: boolean;
  } = await req.json();

  // Determine which provider to use based on the model
  let selectedModel;
  if (model.startsWith('openai/')) {
    const modelName = model.replace('openai/', '');
    selectedModel = openai(modelName);
  } else if (model.startsWith('anthropic/')) {
    const modelName = model.replace('anthropic/', '');
    selectedModel = anthropic(modelName);
  } else {
    // Default to OpenAI
    selectedModel = openai('gpt-5.1');
  }

  const result = streamText({
    model: selectedModel,
    messages: convertToModelMessages(messages),
    system: 'You are a helpful assistant that can answer questions and help with tasks',
    ...(webSearch && model.startsWith('openai/') && {
      tools: {
        web_search_preview: openai.tools.webSearch({
          searchContextSize: 'high',
        }),
      },
    }),
  });

  // Send sources and reasoning back to the client
  return result.toUIMessageStreamResponse({
    sendSources: true,
    sendReasoning: true,
  });
}

