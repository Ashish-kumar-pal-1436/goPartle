import express from "express";
import cors from "cors";

import requirementRoutes from "./src/routes/requirement.routes.js";
import errorMiddleware from "./src/middleware/error.middleware.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "GoPratle backend is running",
  });
});

app.use("/api/requirements", requirementRoutes);

app.use(errorMiddleware);

export default app;