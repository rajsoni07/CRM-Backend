import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, enum: ["New", "Contacted", "Qualified", "Lost", "Won"], default: "New" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  notes: { type: String }
}, { timestamps: true });

export default mongoose.model("Lead", leadSchema);
