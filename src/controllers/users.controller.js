//crea el objeto user con los metodos para la api rest
const UserModel = require("../models/User");
const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
};

userCtrl.createUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const user = new User({
      username,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch (error) {
    console.error(error);
  }
};

userCtrl.getUser = (req, res) => res.json("Usuario"); //falta implementar

userCtrl.updateUser = (req, res) => res.json("user updated"); //falta implementar

userCtrl.deleteUser = async (req, res) => {
  await UserModel.findByIdAndDelete(req.params.id);
  res.json("User deleted");
};

module.exports = userCtrl;
