const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    jobLabel: {
        type: String,
        required: true,
        trim: true
    },
    nextRunningTime: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        default: 'active'
    },
    type: {
        type: String,
        trim: true,
        default: 'recurring'
    },
    repeat: {
        type: Number,
        default: 60
    },
    guard: {
        type: String,
        required: true,
        default: '1m'
    },
    handler: {
        type: String,
        required: true,
        trim: true
    },
    cronParent: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'CronSchedule'
    }
}, {
    timestamps: true
});


const Job = mongoose.model('Job', JobSchema);

module.exports = Job;