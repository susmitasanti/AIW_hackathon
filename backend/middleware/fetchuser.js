
const requireLogin = (req, res, next) => {
    let success;
  if (!req.session.email) {
    success=false
    res.json({success:success, msg:"Internal Server Error, session not set"})
  }
  else {
    next();
  }
};

module.exports = {
  requireLogin
};








