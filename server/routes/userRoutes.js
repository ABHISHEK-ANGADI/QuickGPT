import express from "express";
import { getPublishedImages, getUser, loginUser, registerUser } from "../controllers/userController.js";
import { protect } from "../middlewares/auth.js";

const userRouter = express.Router();

// Register a new user
userRouter.post("/register", registerUser);

// Login user
userRouter.post("/login", loginUser);

// Get logged-in user data (protected route)
userRouter.get("/data", protect, getUser);

userRouter.get("/published-images", getPublishedImages);

export default userRouter;
