let admin = (req, res, next) => {
  if (req.user.role === 0) {
    return res.send("Dude you are not allowed to do this");
  }
  next();
};

module.exports = { admin };
