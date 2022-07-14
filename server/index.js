require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

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

app.get('/', (req, res) => {
    res.send('Hello WOrld');
});

app.post('/admin', async (req, res) => {
    console.log(`body===>\n`);
    console.log(req.body);

    const { question: questionReceived } = JSON.stringify(req.body);

    console.log(`data===> ${questionReceived}`);

    if (!questionReceived) {
        res.status(406).send({
            message: 'use key "question" exactly as written here!',
        });
        return;
    }

    const foundQuestion = await Question.findOne({
        question: questionReceived,
    });
    if (foundQuestion) {
        res.status(406).send({ message: 'Question already exists!' });
        return;
    }

    const newQuestion = await new Question({ question: questionReceived });
    newQuestion.save((error) => {
        if (!error) {
            res.status(200).send({
                message: 'sucessfully added to database',
            });
        } else {
            res.status(503).send({ message: error });
        }
    });
    return;
});

app.listen(process.env.PORT || 3100, (req, res) => {
    console.log('http://localhost:3100');
});
