const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    code: {
        type: String,
        required: true,
        trim: true
    },
    passmark: {
        type: Number,
        required: true
    },
    lecture: {
        type: String,
        required: true,
        trim: true
    },
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'subjects'
    }]
});

const Course = mongoose.model('courses', CourseSchema)

module.exports = Course;