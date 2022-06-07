///////////////////////////////////////////
require('colors');

// environment config
require('dotenv').config(); 

const connectMongoDb = require('../src/db/mongoose');
connectMongoDb();   

///////////////////////////////////////////

const dbhandler = require('../src/libs/db_handler');

/////////////////////////
// Create a cronSchedule
/////////////////////////
// const cronData0 = {
//     cronLabel: "cron0",
//     frequency: "*/2 * * * * *",
//     handler: "src/scheduler/crons/cron0",
//     active: true
// };

// const cronData1 = {
//     cronLabel: "cron1",
//     frequency: "*/3 * * * * *",
//     handler: "src/scheduler/crons/cron1",
//     active: true
// };

// const cronData2 = {
//     cronLabel: "cron2",
//     frequency: "*/5 * * * * *",
//     handler: "src/scheduler/crons/cron2",
//     active: true
// };

// dbhandler.createCron(cronData0, (err, msg) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(msg);
// });


////////////////
// Create a job
////////////////
// const jobData1 = {
//     cronLabel: 'cron0',
//     jobLabel: 'job1',
//     nextRunningTime: '30/05/2022 09:55 pm',
//     status: 'active',
//     type: 'recurring',                                  // one-off, recurring, ntimes
//     repeat: 60,                                         // 1min in seconds
//     guard: '30s',                                       // 30s, 1m, 5m, 15m, 30m, 1hr
//     handler: "src/scheduler/handlers/jobHandler1"
// };

// const jobData2 = {
//     cronLabel: 'cron0',
//     jobLabel: 'job2',
//     nextRunningTime: '30/05/2022 09:56 pm',
//     status: 'active',
//     type: 'recurring',                                  // one-off, recurring, ntimes
//     repeat: 60,                                         // 1min in seconds
//     guard: '1m',                                        // 30s, 1m, 5m, 15m, 30m, 1hr
//     handler: "src/scheduler/handlers/jobHandler2"
// };

// dbhandler.createJob(jobData2, (err, job) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log(job);
// });


/////////////////
// Read all crons
/////////////////
// dbhandler.readCrons({}, (err, crons) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log('results:', crons);
// });

/////////////////
// Read all jobs
/////////////////
// dbhandler.readJobs({}, (err, jobs) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log('results:', jobs);
// });

////////////////////
// Read cron's jobs
////////////////////
// dbhandler.readCronJobs({ cronLabel: 'cron0' },  (err, jobs) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log('results:', jobs);
// });

//////////////
// Read cron
//////////////
// dbhandler.readCron({ cronLabel: 'cron11' },  (err, cron) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log('results:', cron);
// });

//////////////
// Read job
//////////////
// dbhandler.readJob({ jobId: '629bbcd0c6768fc847cd690e' },  (err, job) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log('results:', job);
// });

//////////////
// Update cron
//////////////
// const cronData = { 
//     active: true, 
//     frequency: "*/2 * * * * *" 
// };

// dbhandler.updateCron('cron0', cronData, (err, code) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log('results:', code);
// });

//////////////
// Update job
//////////////
// const jobData = { 
//     nextRunningTime: "30/05/2022 09:55 pm",  // 30/05/2022 09:55 pm
//     status: 'active',  // active
//     repeat: 60,          // 60                               
//     guard: '30s',        // 30s                              
// };

// dbhandler.updateJob('629bbc5aad50c6d0e07dacb2', jobData, (err, code) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log('results:', code);
// });


//////////////
// Delete cron
//////////////
// dbhandler.deleteCron({ cronLabel: 'cron0' },  (err, cron) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log('results:', cron);
// });

//////////////
// Delete job
//////////////
// dbhandler.deleteJob({ jobId: '629ca12e492ddfe12fe49d45' },  (err, job) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log('results:', job);
// });