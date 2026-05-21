import express from "express";
import OpenAI from "openai";

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post("/voice-ai", async (req, res) => {

  try {

    const { message } = req.body;

    const completion =
      await client.chat.completions.create({

        model: "gpt-4.1-mini",

        messages: [

          {
            role: "system",
            content:
              `
              You are EchoCare Voice AI,
              a smart healthcare assistant.

              Keep responses:
              short,
              natural,
              conversational,
              voice-friendly.

              Suggest doctors when needed.
              `
          },

          {
            role: "user",
            content: message
          }

        ]

      });

    res.json({
      reply:
        completion.choices[0].message.content
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Voice AI Error"
    });

  }

});

export default router;