const express = require("express");
var bodyParser = require("body-parser");
const cors = require("../cors");
const emailRouter = express.Router();
var nodemailer = require("nodemailer");
emailRouter
  .route("/")
  .options(cors.cors, (req, res) => {
    console.log("coming mail here");
    res.sendStatus(200);
  })
  .post(cors.cors, (req, res, next) => {
    let transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      secureConnection: false,
      port: 587,
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: "pradip.jadhav@aeropsfm.com",
        pass: "Pj110399!",
        // wbafhgoywwcvpigu
      },
    });

    let mailOptions = {
      from: `"Pradip", "pradip.jadhav@aeropsfm.com"`,
      to: `pradip.jadhav@aeropsfm.com`,
      subject: `You have got message from ${req.body.name} for AEROPS`,
      html: `<div style="font-size: 18px; font-weight: bold; margin-bottom: 8px">${req.body.name}</div><br><div style="margin-bottom: 8px">${req.body.email}</div><div>${req.body.mobile}</div><div style="font-weight: bold; margin-top: 16px; text-align: center; font-size: 24px">${req.body.feedback}</div>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        res.send("error");
      } else {
        console.log("email sent:" + info.response);
        res.send("sent successfully");
      }
    });
  });

module.exports = emailRouter;
