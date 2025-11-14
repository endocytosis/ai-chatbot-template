'use client';

import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">AI Chatbot Template</h1>
          <p className="text-xs text-muted-foreground">
            Built by{' '}
            <a
              href="https://picaos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              Pica
            </a>
            {' '}using{' '}
            <a
              href="https://ai-sdk.dev/elements"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              Vercel AI Elements
            </a>
            {' '}and{' '}
            <a
              href="https://ai-sdk.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              AI SDK
            </a>
          </p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}

