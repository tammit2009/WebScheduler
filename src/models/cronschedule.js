const mongoose = require('mongoose');

const CronScheduleSchema = new mongoose.Schema({
    cronLabel: {
        type: String,
        required: true,
        trim: true
    },
    frequency: {
        type: String,
        required: true,
        trim: true
    },
    handler: {
        type: String,
        required: true,
        trim: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// virtual relationship mapping
CronScheduleSchema.virtual('jobs', {
    ref: 'Job',
    localField: '_id',
    foreignField: 'cronParent'
});

// to make populate work: by default, the virtual fields are not included in the output
CronScheduleSchema.set('toObject', { virtuals: true });
CronScheduleSchema.set('toJSON', { virtuals: true });

const CronSchedule = mongoose.model('CronSchedule', CronScheduleSchema);

module.exports = CronSchedule;