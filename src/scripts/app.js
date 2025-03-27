// src/scripts/app.js

const form = document.getElementById('smsForm');
const phoneNumberInput = document.getElementById('phoneNumber');
const message = "We have recorded an accident at Kukatpally Crossroads at the location: 17.4848° N, 78.3992° E. Please send help immediately.";

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const phoneNumber = phoneNumberInput.value;

    // Validate phone number format
    const phoneNumberPattern = /^\+[1-9]\d{1,14}$/;
    if (!phoneNumberPattern.test(phoneNumber)) {
        alert('Please enter a valid phone number in E.164 format.');
        return;
    }

    try {
        const response = await fetch('/send-sms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phoneNumber, message }),
        });

        if (response.ok) {
            alert('SMS sent successfully!');
        } else {
            alert('Failed to send SMS.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending SMS.');
    }
});