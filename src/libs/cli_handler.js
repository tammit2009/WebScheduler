const axios = require('axios');

const baseUrl = process.env.BASE_URL;

const cliHandler = (yargs) => {

    // List command
    yargs.command({
        command: 'list',
        describe: 'List notes',
        handler() {

            console.log('List invoked');

        }
    });

    // Start command
    yargs.command({
        command: 'start',
        describe: 'Start the scheduler',
        async handler() {
            try {
                const resp = await axios.get(`${baseUrl}/scheduler/start`);
                console.log(resp.data);
            }
            catch(err) {
                if (err.code === 'ECONNREFUSED') {
                    return console.log('Unable to connect to the service');
                }

                console.log(err);
            };
        }
    });

    // Activate command
    yargs.command({
        command: 'activate',
        describe: 'Activate the scheduler',
        async handler() {
            try {
                const resp = await axios.get(`${baseUrl}/scheduler/activate`);
                console.log(resp.data);
            }
            catch(err) {
                if (err.code === 'ECONNREFUSED') {
                    return console.log('Unable to connect to the service');
                }

                console.log(err);
            }
        }
    });

    // Passivate command
    yargs.command({
        command: 'passivate',
        describe: 'Passivate the scheduler',
        async handler() {
            try {
                const resp = await axios.get(`${baseUrl}/scheduler/passivate`);
                console.log(resp.data);
            }
            catch(err) {
                if (err.code === 'ECONNREFUSED') {
                    return console.log('Unable to connect to the service');
                }

                console.log(err);
            }
        }
    });

    // Stop command
    yargs.command({
        command: 'stop',
        describe: 'Stop the scheduler',
        async handler() {
            try {
                const resp = await axios.get(`${baseUrl}/scheduler/stop`);
                console.log(resp.data);
            }
            catch(err) {
                if (err.code === 'ECONNREFUSED') {
                    return console.log('Unable to connect to the service');
                }

                console.log(err);
            }
        }
    });
    
    // State command
    yargs.command({
        command: 'state',
        describe: 'State of the scheduler',
        // builder: {
        //     title: {                    // i.e. the option
        //         describe: 'Note title',
        //         demandOption: true,     // required    
        //         type: 'string'          // array, boolean (default), count, number, string
        //     },
        //     body: {
        //         describe: 'Note body',
        //         demandOption: true,
        //         type: 'string'
        //     }
        // },
        async handler() {
            try {
                const resp = await axios.get(`${baseUrl}/scheduler/state`);
                console.log(resp.data);
            }
            catch(err) {
                if (err.code === 'ECONNREFUSED') {
                    return console.log('Unable to connect to the service');
                }

                console.log(err);
            }
        }
    });

    // // Autotest command
    // yargs.command({
    //     command: 'autotest',
    //     describe: 'Auto test the state of the scheduler',
    //     async handler() {

    //         // if (forked !== 'undefined') {
    //         //     console.log('Stopping the scheduler first...');
    //         //     forked.send({ command: 'stop' });
    //         //     await sleep(5000);
    //         //     forked = 'undefined';
    //         //     console.log(`state: ${await getForkedState(forked)}`);
    //         // }

    //         // console.log(`===== auto-test start  ======`);

    //         // forked = fork('child.js', ['arg1', 'arg2', 'arg3'], { silent: true });
    //         // registerChildEvents(forked);

    //         // const stateChecker = setInterval(async () => {
    //         //     // detect if forked process is alive
    //         //     const state = await getForkedState(forked);
    //         //     if (state !== 'undefined') {
    //         //         console.log('pid:', forked.pid, 'state:', state);
    //         //     }
    //         //     else {
    //         //         console.log('forked is undefined');
    //         //     }
    //         // }, 2000);

    //         // // send start command
    //         // setTimeout(() => {
    //         //     forked.send({ command: 'start' });
    //         // }, 5000);

    //         // // send activate command
    //         // setTimeout(() => {
    //         //     forked.send({ command: 'activate' });
    //         // }, 15000);

    //         // // send passivate command
    //         // setTimeout(() => {
    //         //     forked.send({ command: 'passivate' });
    //         // }, 30000);

    //         // // send stop command
    //         // setTimeout(async () => {
    //         //     forked.send({ command: 'stop' });
    //         //     await sleep(2000);
    //         //     clearInterval(stateChecker);
    //         // }, 40000);            

    //         // console.log(`===== auto-test end  ======`);
    //     }
    // });

};


module.exports = cliHandler;

