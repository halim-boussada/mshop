const userService = require("../../../service/shopOwnerService.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
  tls: {
    rejectUnauthorized: false,
  },
});
module.exports = {
  async signUpUser(req, res) {
    try {
      if (!req.body.password || !req.body.email) {
        res.status(401).json({ msg: false });
      }
      var user = await userService.getUserByEmail(req.body.email);
      if (user) {
        res.status(401).json({ msg: "email already exist" });
      }
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        var user = req.body;
        user.password = hash;
        var a = await userService.signup(user);
        var u = await userService.getUserByEmail(req.body.email);

        var token = jwt.sign({ id: u._id }, "sa7fa leblebi");
        var access_token = jwt.sign({ id: u._id }, "halelews");
        res.send({ token, access_token });
      });
    } catch {
      res.send("get error ");
    }
  },
  async login(req, res) {
    try {
      var user = await userService.getUserByEmail(req.body.email);
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (result) {
            var token = jwt.sign({ id: user._id }, "sa7fa leblebi");
            var access_token = jwt.sign({ id: user._id }, "halelews");
            res.send({ token, access_token });
          } else {
            res.status(401).json({ msg: "wrong password" });
          }
        });
      } else {
        res.status(401).json({ msg: "wrong email" });
      }
    } catch {
      res.send("get error ");
    }
  },
  async verify(req, res) {
    try {
      if (!req.body.token) {
        res.send({ msg: false });
      }
      var objId = jwt.verify(req.body.token, "sa7fa leblebi");
      var user = await userService.getUserById(objId.id);
      if (user) {
        res.send(user);
      } else {
        res.send({ msg: false });
      }
    } catch {
      res.send("get error ");
    }
  },
  async forgetPassword(req, res) {
    try {
      var user = await userService.getUserByEmail(req.body.email);
      if (!user) {
        res.status(401).json({ msg: "there is no account with this email" });
      }
      var token = jwt.sign({ id: user._id }, "sa7fa leblebi");
      var link = "https://karriery.tn/user/forgetpassword?token=" + token;
      let mailOptions = {
        from: "carrierytn@gmail.com",
        to: req.body.email,
        subject: "Update Password",
        text: link,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          res.send({ msg: "updated" });
        }
      });
      res.send({ msg: "updated" });
    } catch {
      res.send("error updated");
    }
  },

  async updatedPassword(req, res) {
    try {
      var objId = jwt.verify(req.body.token, "sa7fa leblebi");
      var user = await userService.getUserById(objId.id);
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        var m = await userService.updatePassword(user._id, hash);
        var token = jwt.sign({ id: user._id }, "sa7fa leblebi");
        var access_token = jwt.sign({ id: user._id }, "halelews");
        res.send({ token, access_token });
      });
    } catch {
      res.status(401).json({ msg: "wrong password" });
    }
  },
};
