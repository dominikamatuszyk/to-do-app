const User = require("../models/user.model");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.route("/register").post(async (req, res) => {
  const { email, password } = req.body;

  const alreadyExists = await User.findOne({ email: email }).catch((err) => {
    console.log("ERROR: ", err);
  });

  if (alreadyExists) {
    return res.json({ message: "User with this email already exists" });
  }

  const newUser = new User({ email, password });
  await newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error! Cannot register user ", err));
});

router.route("/login").post(async (req, res) => {
  const { email, password } = req.body;
  const userWithEmail = await User.findOne({ email: email }).catch((err) =>
    console.log("ERROR", err)
  );

  if (!userWithEmail) {
    return res
      .status(401)
      .json({ message: "Unauthorized request! Access denied" });
  }
  if (userWithEmail.password !== password) {
    return res
      .status(401)
      .json({ message: "Unauthorized request! Access denied" });
  }
  const jwtToken = jwt.sign(
    {
      id: userWithEmail._id,
      email: userWithEmail.email,
    },
    process.env.JWT_SECRET
  );
  return res.status(200).json({ token: jwtToken });
});

router.get('/logout', function(req, res) {
  console.log("I am Logout")
  req.logout(); 
  res.json({ 
          status: "logout",
          msg:"Please Log In again"
       });
});

router.route("/delete/:id").delete((req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((success) => res.json("Success! User deleted."))
    .catch((err) => res.status(400).json("Error! " + err));
});

module.exports = router;
