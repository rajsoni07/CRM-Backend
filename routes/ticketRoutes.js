import express from "express";
import Ticket from "../models/Ticket.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// ✅ Create Ticket
router.post("/", protect, async (req, res) => {
  try {
    const ticket = await Ticket.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Failed to create ticket" });
  }
});

// ✅ Get All Tickets (for logged in user)
router.get("/", protect, async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tickets" });
  }
});

export default router;