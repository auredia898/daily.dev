const nodemailer = require("nodemailer");
const dotenv = require('dotenv')

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

async function sendEmail({ to, subject, message }) {
    const mailOptions = {
        from: process.env.NODEMAILER_PASS,
        to,
        subject,
        html: message,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: ", info.response);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
}

module.exports = sendEmail;