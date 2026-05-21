import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

console.log("API KEY:", process.env.OPENAI_API_KEY);

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post("/chat", async (req, res) => {

  try {

    const { message } = req.body;

    const completion =
      await client.chat.completions.create({

        model: "gpt-4.1-mini",

        messages: [

          {
            role: "system",
            content:
              "You are EchoCare AI, a smart healthcare assistant."
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
      message: "AI Error"
    });

  }

});

export default router;