
/****************************/
/*** Scheduler Controller ***/
/****************************/

const asyncHandler  = require('express-async-handler');
const createError   = require('http-errors');
const async         = require('async');
const { fork }      = require('child_process');

const { registerChildEvents, getForkedState, sleep } = require('../libs/parent_events');

let forked = false;

/*
 * Start the scheduler 
 * Method: 'GET', url = '/scheduler/start', Access: 'Public'
 */
const startScheduler = asyncHandler(async (req, res) => {
    if (!forked) {
        forked = fork('./src/child.js', ['arg1', 'arg2', 'arg3'], { silent: true });
        registerChildEvents(forked);
        await sleep(2500);          // allow the child process to startup
    }
    forked.send({ command: 'start' });
    const { forkedState, uptimeTicks } = await getForkedState(forked);
    res.json({ command: 'start', forkedState, uptimeTicks });
});

/*
 * Activate the scheduler 
 * Method: 'GET', url = '/scheduler/activate', Access: 'Public'
 */
const activateScheduler = asyncHandler(async (req, res) => {
    forked.send({ command: 'activate' });            
    const { forkedState, uptimeTicks } = await getForkedState(forked);
    res.json({ command: 'activate', forkedState, uptimeTicks });
});

/*
 * Passivate the scheduler 
 * Method: 'GET', url = '/scheduler/passivate', Access: 'Public'
 */
const passivateScheduler = asyncHandler(async (req, res) => {
    forked.send({ command: 'passivate' });
    const { forkedState, uptimeTicks } = await getForkedState(forked);
    res.json({ command: 'passivate', forkedState, uptimeTicks });
});

/*
 * Stop the scheduler 
 * Method: 'GET', url = '/scheduler/stop', Access: 'Public'
 */
const stopScheduler = asyncHandler(async (req, res) => {
    if (forked) {
        forked.send({ command: 'stop' });
        forked = false;
    }
    const { forkedState, uptimeTicks } = await getForkedState(forked);
    res.json({ command: 'stop', forkedState, uptimeTicks });
});

/*
 * Fetch the state of the scheduler 
 * Method: 'GET', url = '/scheduler/stop', Access: 'Public'
 */
const getSchedulerState = asyncHandler(async (req, res) => {
    const { forkedState, uptimeTicks } = await getForkedState(forked);
    res.json({ command: 'state', forkedState, uptimeTicks });
});


module.exports = { 
    startScheduler, 
    activateScheduler, 
    passivateScheduler, 
    stopScheduler, 
    getSchedulerState
};