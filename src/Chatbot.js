import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "write a haiku about ai"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));