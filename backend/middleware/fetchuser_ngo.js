
const requireLogin_ngo = (req, res, next) => {
    let success;
  if (!req.session.username) {
    success=false
    console.log({success:success, msg:"Internal Server Error, session not set"})
  }
  else {
    next();
  }
};

module.exports = {
  requireLogin_ngo
};








