module.exports = (req, res, next) => {
  let { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ message: "Please provide a UserName, thank you" });
  }
  if (name.length > 128) {
    return res.status(400).json({
      message: "Username can not exceed 128 characters, i mean, come on!!!"
    });
  }
  if (name[0] !== name[0].toUpperCase()) {
    res.status(400).json({
      message: "Please capitalize the first letter of the UserName, thank you."
    });
  } else {
    next();
  }
};
