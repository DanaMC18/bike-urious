console.log('bicycle! bicycle!')

$(document).ready(function(){
 
 $('#calendar').fullCalendar({
    // var events = require('../lib/events.json')
    dayClick: function(){
      console.log('a day has been clicked!!')
      // $.ajax({
      //   url: '/days_events',
      //   type: 'get',
      //   dataType: 'json',
      //   data: 
      //   }).done(function(response){
      //     console.log(response);
      //   })
    }
 })

 $('#calendar').fullCalendar('next');




})