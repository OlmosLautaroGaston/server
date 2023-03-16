import User from "../models/User";

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });

  if (user) return res.status(400).json({ message: "The user already exists" });

  const email = await User.findOne({ email: "The user already exists" });

  if (email)
    return res.status(400).json({ message: "The email already exists" });
  next();
};
