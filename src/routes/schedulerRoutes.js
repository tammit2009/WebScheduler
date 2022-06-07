
/************************/
/*** Scheduler Routes ***/
/************************/

// Dependencies
const express = require('express');
const router = express.Router();

const { 
    startScheduler, activateScheduler, passivateScheduler, stopScheduler, getSchedulerState
} = require('../controllers/schedulerController');

router.route('/start').get(startScheduler);
router.route('/activate').get(activateScheduler);
router.route('/passivate').get(passivateScheduler);
router.route('/stop').get(stopScheduler);
router.route('/state').get(getSchedulerState);


// Exports
module.exports = router;