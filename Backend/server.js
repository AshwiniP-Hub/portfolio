require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const Contact = require("./models/contactSchema");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Atlas Connected"))
  .catch(err => console.log("MongoDB Connection Error:", err));

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD, // Use App Password
    },
});

// API Route for Contact Form Submission
app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Save the contact message in MongoDB Atlas
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        console.log("Message saved in MongoDB Atlas");

        // Email Configuration
        const mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Send Email
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");

        res.status(200).json({ success: true, message: "Message saved and email sent!" });
    } catch (error) {
        console.error("Error Details:", error);
        res.status(500).json({ success: false, message: "Error processing request." });
    }
});


// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
