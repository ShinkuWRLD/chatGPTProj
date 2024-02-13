import OpenAI from "openai";
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI(apiKey);

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
      { role: "user", content: "How did Michael Jackson die?" },
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
  });

  // Extract and log just the content
  console.log(completion.choices[0].message.content);
}

main();
