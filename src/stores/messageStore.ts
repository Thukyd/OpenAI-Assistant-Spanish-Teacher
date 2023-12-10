// src/stores/messageStore.ts
import { writable } from 'svelte/store';

export interface Message {
  id: number;
  isUser: boolean;
  text: string;
}

export const messages = writable<Array<Message>>([]);
