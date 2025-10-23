const passport = require("passport");

module.exports = (app) => {
  //Route Handler 1: PassportJS attempts to autheticate the user
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  //Route Handler 2:
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send();
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
