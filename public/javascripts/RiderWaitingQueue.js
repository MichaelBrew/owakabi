// This way of exporting/mimicking a static variable is not working
// For now, just using global.riderWaitingQueue and modfiying it in RiderMessenger.js

// function RiderWaitingQueue () {
//     this.isRiderWaiting = function (number) {
//         for (var i = 0; i < queue.length; i++) {
//             if (queue[i] == number) {
//                 return true;
//             }
//         }

//         return false;
//     };

//     this.addRiderToQueue = function (number) {
//         queue.push(number);
//     };

//     this.removeRiderFromQueue = function (number) {
//         for (var i = 0; i < queue.length; i++) {
//             if (queue[i] == number) {
//                 queue.splice(i, 1);
//                 return;
//             }
//         }
//     };
// }

// RiderWaitingQueue.queue = [];

// module.exports = RiderWaitingQueue;