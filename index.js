'use strict'

const db = require('./models/index');
const User = db.User;
const Question = db.Question;
const Answer = db.Answer;

db.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

User.findAll().then(users => {
    debugger
}).catch(error => {
    console.log(error);
});

Question.findAll({ include: [Answer] }).then(questions => {
    debugger
}).catch(error => {
    console.log(error);
});