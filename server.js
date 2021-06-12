const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const subjectAPI = require('./src/api/subject.api')
const courseAPI = require('./src/api/course.api');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI,{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false
},(err) => {
    if (err) {
        console.log('DB error: ', err.message);
    }
});

mongoose.connection.once('open',()=>{
    console.log('DB Synced');
});

app.route('/').get((req, res) => {
    res.send('SLIIT');
});

app.use('/subject', subjectAPI());
app.use('/course', courseAPI());

app.listen(PORT,()=>{
    console.log(`server is up on PORT ${PORT}`);
});
