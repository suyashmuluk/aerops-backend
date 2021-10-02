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
      host: "smtpout.secureserver.net",
      secureConnection: true,
      port: 465,
      auth: {
        user: "info@aeropsfm.com",
        pass: "Pj110399!",
      },
    });

    let mailOptions = {
      from: `"AEROPS", "info@aeropsfm.com"`,
      to: `info@aeropsfm.com`,
      subject: `You have got message from ${req.body.name} for AEROPS`,
      html: `<div style="font-size: 15px; margin-bottom: 8px">Name: <span style="font-weight: bold; font-size: 16px">${req.body.name}</span></div>
            <div style="margin-bottom: 8px; font-size: 15px;">Email: ${req.body.email}</div>
            <div style="margin-bottom: 8px; font-size: 15px;">Mob. No.: ${req.body.mobile}</div>
            <div style="margin-top: 16px; font-size: 15px">Message: ${req.body.feedback}</div>`,
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
