require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Serve static files from the "src" directory
app.use(express.static(path.join(__dirname, 'src')));

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

app.post('/send-sms', (req, res) => {
    const { phoneNumber, message } = req.body;

    client.messages
        .create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phoneNumber,
        })
        .then((message) => {
            res.status(200).send({ success: true, message: 'SMS sent successfully!' });
        })
        .catch((error) => {
            console.error('Error sending SMS:', error);
            res.status(500).send({ success: false, message: 'Failed to send SMS.' });
        });
});

// Serve the index.html file for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});