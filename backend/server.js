const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const bodyParser = require('body-parser'); 
// require('./cron'); 



const app = express();
connectDB();

const logFilePath = path.join(__dirname, 'logs.txt');

const logToFile = (message) => {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${message}\n`;
    fs.appendFileSync(logFilePath, logMessage, 'utf8');
  };

  const allowedOrigins = [
    'atharv1599-gmail-com-cuvette-final-evaluation-may-theta.vercel.app',
    // 'http://localhost:5173' // Local development URL (optional)
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl, etc.) or requests from allowed origins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true // If you need to allow cookies or authorization headers
  }));
  app.options('*', cors());

// app.use(cors());
// app.use(cors({ origin: 'http://localhost:5173' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

logToFile('Server started.');


app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to the API');
  });
  

  app.use((req, res, next) => {
    logToFile(`Received ${req.method} request for ${req.url}`);
    next();
  });
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    logToFile(`Server running on port ${PORT}`);
  });