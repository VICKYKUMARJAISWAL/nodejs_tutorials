const EventEmitter = require('node:events');
const customEmitter = new EventEmitter();
customEmitter.on('response', (name,id) =>{
    console.log(`data receieved ${name} with id:${id}`);
})

customEmitter.emit('response','vicky',23);