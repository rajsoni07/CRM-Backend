import express from "express";
import Lead from "../models/Lead.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Create Lead
router.post("/", protect, async (req, res) => {
  const { name, email, phone, status, notes } = req.body;
  try {
    const lead = new Lead({ name, email, phone, status, notes, userId: req.user.id });
    await lead.save();
    res.status(201).json(lead);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Read Leads (current user)
router.get("/", protect, async (req, res) => {
  try {
    const leads = await Lead.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Update Lead
router.put("/:id", protect, async (req, res) => {
  try {
    const lead = await Lead.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    res.json(lead);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete Lead
router.delete("/:id", protect, async (req, res) => {
  try {
    const deleted = await Lead.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!deleted) return res.status(404).json({ message: "Lead not found" });
    res.json({ message: "Lead deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
