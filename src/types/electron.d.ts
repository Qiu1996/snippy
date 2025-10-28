import type { SnippetTab } from "./snippet";

declare global {
  interface Window {
    snippyAPI: {
      createSnippet: () => Promise<SnippetTab>;
      getSnippets: () => Promise<SnippetTab[]>;
      getSnippetById: (id: number) => Promise<SnippetTab & { content: string }>;
      updateSnippet: (id: number, content: string) => Promise<void>;
    };
  }
}

export {};
