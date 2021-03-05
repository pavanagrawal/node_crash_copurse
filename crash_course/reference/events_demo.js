const EventEmmiter = require('events')

// Create class

class MyEmitter extends EventEmmiter {}

// Init Event Object

const myEmitter = new MyEmitter()

// Event Listner
myEmitter.on('event', () => console.log('Event Fired'))

myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')