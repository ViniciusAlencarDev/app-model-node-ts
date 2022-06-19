// const express = require('express')
// const app = express()
// const os = require('os')
// const cluster = require('cluster')

// const cpusLength = os.cpus().length;

// if(cluster.isMaster) {
//     console.log('ok')
//     for(let i = 0; i < cpusLength; i++) {
//         console.log(i)
//         cluster.fork();
//     }

//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
//         console.log('Starting a new worker');
//         cluster.fork();
//       });
// } else
//     app.listen(3000, () => console.log('It is working correctly'))
