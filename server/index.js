require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const databasePassword = process.env.MONGO_PASSWORD;
const app = express();

mongoose.connect(
    `mongodb+srv://izaan:${databasePassword}@cluster0.boms2em.mongodb.net/`,
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
