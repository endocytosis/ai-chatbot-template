'use client';

import { MessageSquare, Sparkles, Wrench } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex h-full items-center justify-center p-8">
      <div className="max-w-md text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-6">
            <MessageSquare className="h-12 w-12 text-primary" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Start a Conversation
          </h2>
          <p className="text-muted-foreground">
            Ask me anything or try one of the available tools below
          </p>
        </div>

        <div className="grid gap-4 pt-4">
          <div className="flex items-start gap-3 text-left p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
            <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Intelligent Responses</p>
              <p className="text-xs text-muted-foreground">
                Powered by multiple AI models including GPT 5.1 and Sonnet 4.5
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-left p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
            <Wrench className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Web Search & Tools</p>
              <p className="text-xs text-muted-foreground">
                Built-in web search for OpenAI models, plus extensible tool system
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

