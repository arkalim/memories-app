import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

dotenv.config();
const app = express();

// environment variables
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true })); // 30mb for images
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// Routes
app.use("/posts", postRoutes);

// Connect to the DB
mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    // if the connection to the DB is established, run the server
    .then(() =>
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));

// prevents warnings in the console
mongoose.set("useFindAndModify", false);
