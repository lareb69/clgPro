require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const databasePassword = process.env.MONGO_PASSWORD;

mongoose.connect(
    'mongodb+srv://izaan:' +
        databasePassword.replace('@', '%40') +
        '@cluster0.boms2em.mongodb.net/answersDB?retryWrites=true&w=majority',
);

const questionSchema = new mongoose.Schema({
    question: String,
});

const anwerSchema = new mongoose.Schema({
    introduction: String,
    features: [String],
    kinds: [String],
    conclusion: String,
});

const Question = new mongoose.model('Question', questionSchema);

app.post('/admin', (req, res) => {
    console.log(req.body);
    res.status(200).send({ message: 'ok' });
});

app.listen(process.env.PORT || 3100, (req, res) => {
    console.log('https://localhost:3100');
});
