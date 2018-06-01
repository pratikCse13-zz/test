var EventEmitter = require('events')

class MyEmitter extends EventEmitter{
    constructor(){
        super()
        this.addLeadEvent = 'addLead'
    }
}

var emitter = new EventEmitter()
var listener = new EventEmitter()

listener.on('addLead', ()=>{
    console.log('event trigerredd')
})

listener.emit('addLead', {})

