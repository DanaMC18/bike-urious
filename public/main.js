console.log('bicycle! bicycle!')

$(document).ready(function(){

 var renderEvent = function(response){
  // console.log(response);
  var events = {events: response}
  $('#calendar').fullCalendar('addEventSource', events);
 }
 
  $.ajax({
    url: '/events',
    type: 'get',
    dataType: 'json'
  }).done(renderEvent);

 $('#calendar').fullCalendar({
    dayClick: function(){
      console.log('a day has been clicked!!')
    }
 })

 $('#calendar').fullCalendar('next');




})