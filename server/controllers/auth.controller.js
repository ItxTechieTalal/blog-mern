import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(400, "All fields are required"));
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);

  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
    return  next(errorHandler(400, "Email address is already registered"));
    }
    const newUser = await User.create({
      username,
      email,
      password : hashedPassword,
    });
    res.status(201).json({ newUser });
  } catch (error) {
    return next(errorHandler( 500,"something went wrong"));
  }
}
