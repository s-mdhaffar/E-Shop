const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
	console.log('Connected to MongoDB');
});

app.get('/api/test', () => {
	console.log('test successful');
});

app.listen(process.env.PORT || 5000, () => {
	console.log('Server connected');
});
