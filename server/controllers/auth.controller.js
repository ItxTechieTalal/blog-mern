import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields are required"));
  }
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return next(errorHandler(404, "User not found"));
    }
    const isPasswordCorrect = bcryptjs.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
      return next(errorHandler(400, "Invalid credentials"));
    }
    const token = jwt.sign(
      {
        id: existingUser._id
      },process.env.JWT_SECRET,    {
        expiresIn: "5m",
      }
    )
    const {password : pass, ...rest} = existingUser._doc
    res.status(200).cookie('access_token',token,{httpOnly: true}).json({ rest });
  } catch (error) {
    console.log(error)
    return next(errorHandler( 500,"something went wrong"));
  }
}

