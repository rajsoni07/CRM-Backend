import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    service: {
      type: String,
    },
    department: {
      type: String,
    },
    domain: {
      type: String,
    },
    problem: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;