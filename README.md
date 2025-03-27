# My Website

This project is a simple web application that allows users to send SMS messages using Twilio. It consists of an HTML form where users can input a phone number and send a predefined message.

## Project Structure

```
my-website
├── src
│   ├── index.html        # Main HTML document
│   ├── styles
│   │   └── style.css     # Styles for the website
│   └── scripts
│       └── app.js        # JavaScript code for handling SMS sending
├── package.json          # npm configuration file
├── .env                  # Environment variables for Twilio
└── README.md             # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-website
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed. Then run:
   ```
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your Twilio credentials:
   ```
   TWILIO_ACCOUNT_SID=your_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number
   ```

4. **Run the application:**
   You can use a local server to serve the HTML file. For example, you can use `http-server`:
   ```
   npx http-server src
   ```

5. **Open your browser:**
   Navigate to `http://localhost:8080` (or the port specified by your server) to access the application.

## Usage

- Enter a phone number in the input field.
- Click the "Send SMS" button to send the SMS message.

## License

This project is licensed under the MIT License.