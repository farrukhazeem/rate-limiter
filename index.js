const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 100, // Limit each IP to 100 requests per `window` (here, per 24 hours)
  message: "Too many requests from this IP, please try again after 24 hours",
});

// Apply the rate limiter to all requests
app.use(limiter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});