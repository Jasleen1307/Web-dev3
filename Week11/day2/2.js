const EventEmitter=require('events');
var ee= new EventEmitter();
//handling/receiving
//on->method,message->event name
ee.on("chintu",(cb)=>{
    console.log("Hii",cb);
});
ee.on("message",function(text){
    ee.emit("chintu","welcome to my class");
    console.log(text);
});
//emit->trigger/sending
ee.emit('message','hello world');
ee.emit("chintu");