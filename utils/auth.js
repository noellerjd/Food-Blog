const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/0");
  } else {
    res.redirect("/0");
  }
};

module.exports = withAuth;
