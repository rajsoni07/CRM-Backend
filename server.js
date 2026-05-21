import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import ticketRoutes from "./routes/ticketRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors()); // Allow frontend (localhost:3000) to access backend
app.use(express.json());

// -------------------- MongoDB Connection --------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ Mongo Error:", err));

// -------------------- Routes --------------------
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/tickets", ticketRoutes);

// -------------------- Server --------------------
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});