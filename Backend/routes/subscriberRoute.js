import express from "express";
import Subscriber from "../models/Subscriber.js";

const router = express.Router();

router.post("/subscribe", async (req, res) => {
  try {

    const { email } = req.body;

    // check empty
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required"
      });
    }

    
    const existingUser = await Subscriber.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Already subscribed"
      });
    }

    // save email
    const newSubscriber = new Subscriber({ email });

    await newSubscriber.save();

    res.status(201).json({
      success: true,
      message: "Subscribed Successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
});

export default router;