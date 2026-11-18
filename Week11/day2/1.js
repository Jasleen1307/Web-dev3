const EventEmitter=require('events');
var ee= new EventEmitter();
//handling/receiving
//on->method,message->event name
ee.on('message',function(text){
    console.log(text)
})
//emit->trigger/sending
ee.emit('message','hello world');