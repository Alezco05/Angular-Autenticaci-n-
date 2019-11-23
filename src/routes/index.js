//Exports
const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
//Modelo
const User = require("../models/User");
bodyParser = require("body-parser").json();
//Rutas
router.get("/", (req, res) => res.send("Hello World"));
router.post("/register", async (req, res) => {
  const { email } = req.body;
  let { password } = req.body;
  password = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
  const newUser = new User({ email, password });
  await newUser.save();
  const token = jwt.sign({ _id: newUser._id }, "secret-key");
  res.json({ token });
});
router.post("/login", async (req, res) => {
  const { email } = req.body;
  let { password } = req.body;
  password = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
  const user = await User.findOne({ email });
  if (user.password !== password || !user)
    return res.status(401).send("Wrong Password or User");
  const token = jwt.sign({ _id: user._id }, "secret-key");
  res.json({token});
});
router.get("/taks", (req, res) => {
  res.json([
    {
      _id: 1,
      name: "Task One",
      description: "lorem ipsum",
      date: "2019-11-22"
    },
    {
      _id: 2,
      name: "Task Two",
      description: "lorem ipsum" ,
      date: "2019-11-22"
    },
    {
      _id: 3,
      name: "Task Tree",
      description: "lorem ipsum",
      date: "2019-11-22"
    },
    {
      _id: 4,
      name: "Task Four",
      description: "lorem ipsum",
      date: "2019-11-22"
    }
  ]);
});

router.get("/private-taks", verifyToken, (req, res) => {
    res.json([
      {
        _id: 1,
        name: "Task One",
        description: "lorem ipsum",
        date: "2019-11-22"
      },
      {
        _id: 2,
        name: "Task Two",
        description: "lorem ipsum" ,
        date: "2019-11-22"
      },
      {
        _id: 3,
        name: "Task Tree",
        description: "lorem ipsum",
        date: "2019-11-22"
      },
      {
        _id: 4,
        name: "Task Four",
        description: "lorem ipsum",
        date: "2019-11-22"
      }
    ]);
  });

router.get("/get-profile", verifyToken, (req, res) =>{
    res.send(req.userId);
})

//Validar Token
function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized');
    }
    //const token = req.headers.authorization.split(' ')[1];
    const token = req.headers.authorization;
    if(token  === null){
        return res.status(401).send('Unauthorized');
    }
    const payload = jwt.verify(token,'secret-key');
    req.userId = payload._id;
    next();
}

module.exports = router;
