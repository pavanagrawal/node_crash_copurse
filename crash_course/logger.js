const EventEmitter = require('events')
const uuid = require('uuid')

console.log(uuid.v4())

class Logger extends EventEmitter {
    log(msg) {
        console.log(msg)
        // Call Event
        this.emit('message', {id: uuid.v4(), msg: msg})
    }
}

module.exports = Logger