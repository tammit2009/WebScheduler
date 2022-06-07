/////////////////////////////////////////////////
// the child also needs a connection to database
// as it is on another process.

require('colors');

// environment config
require('dotenv').config(); 

const connectMongoDb = require('./db/mongoose');
connectMongoDb();   

//////////////////////////////////////////////////

const scheduler = require('./scheduler');
const { logger } = require("./libs/loggers");

let state = 'init';

process.on('message', (msg) => {
    // console.log('Message from parent:', msg);
    
    if (typeof(msg) == 'object' && msg.command) {
        if (msg['command'] === 'start') {
            // handle any arguments in 'process.argv' if required
            logger.info(`Signal to start!`);
            state = 'passive';
        }
        else if (msg['command'] === 'activate') {
            logger.info(`Signal to activate!`);
            state = 'active';

            startScheduler();
        }
        else if (msg['command'] === 'passivate') {
            logger.info(`Signal to passivate!`);
            state = 'passive';

            stopScheduler();
        }
        else if (msg['command'] === 'stop') {
            logger.info(`Signal to stop forked child pid: ${process.pid}!`);
            state = 'stopped';
            
            // sleep for 2 seconds before exiting (to sync states)
            setTimeout(() => { process.exit(); }, 2000);
        }
        else if (msg['command'] === 'get_state') {
            process.send({ uptimeTicks, state });
        }
    }
});

process.on('exit', () => {
    logger.info(`child process with ${process.pid} exiting...`);
});

// Monitor the child's state (push)
let uptimeTicks = 0;

setInterval(() => {
    process.send({ uptimeTicks, state });
    uptimeTicks++;
}, 1000);

const startScheduler = () => {
    logger.info("Starting Scheduler...")

    scheduler.initCrons();
};

const stopScheduler = () => {
    logger.info("Stopping Scheduler...")

    scheduler.terminateCrons();
}