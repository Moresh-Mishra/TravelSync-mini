// src/ai/genkit.ts
import 'server-only';

import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

const geminiApiKey = process.env.GEMINI_API_KEY;

if (!geminiApiKey) {
  throw new Error('Missing GEMINI_API_KEY environment variable.');
}

export const ai = genkit({
  plugins: [googleAI({ apiKey: geminiApiKey })],
  model: googleAI.model('gemini-2.5-flash'),
});
