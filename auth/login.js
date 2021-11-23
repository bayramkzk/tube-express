const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Admin = require("../models/admin");

const loginMiddleware = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    req.wrongPassword = true;
    return next();
  }

  try {
    const admin = await Admin.findOne({ username });
    if (!admin || !bcrypt.compareSync(password, admin.passwordHash)) {
      req.wrongPassword = true;
      return next();
    }

    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      process.env.SECRET_KEY,
      { expiresIn: "3d" }
    );

    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3d
      })
      .redirect("back");
  } catch (err) {
    req.serverError = true;
    console.log(err);
    return next();
  }
};

module.exports = loginMiddleware;
