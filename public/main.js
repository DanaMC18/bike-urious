console.log('bicycle! bicycle!')

$(document).ready(function(){

 // var renderEvent = function(response){
 //  // console.log(response);
 //  var events = {events: response}
 //  $('#calendar').fullCalendar('addEventSource', events);
 // }
 
  $.ajax({
    url: '/events',
    type: 'get',
    dataType: 'json'
  }).done(function(results){
    var arrayOfEvents = [];
    results.forEach(function (result){
      arrayOfEvents.push({title: result.title, start: result.start});
      console.log(arrayOfEvents);
      console.log(result);
    });
    $('#calendar').fullCalendar('addEventSource', arrayOfEvents);
  });

  var template = Handlebars.compile($('#calendar').html());

 $('#calendar').fullCalendar({
    dayClick: function(){
      console.log('a day has been clicked!!')
    }
 })

 $('#calendar').fullCalendar('next');

 $('#calendar').fullCalendar({
    eventClick: function(calEvent, jsEvent, view) {

        var $title = $('<h3>').html(calEvent.title);
        var $sponsor = $('<p>').html('Sponsor: ' + calEvent.sponsor);
        var $date = $('<p>').html('Date: ' + moment(calEvent.start).format('MMM Do h:mm A'));
        var $about = $('<p>').html('About: ' + calEvent.description);
        var $availability = $('<p>').html('Availability: ' + calEvent.max_attendees - calEvent.rsvps.length);
        var $attendees = $('<p>').html('Attendees: ' + calEvent.rsvps.length);

        $('.modal-content').append($title);
        $('.modal-content').append($sponsor);
        $('.modal-content').append($date);
        $('.modal-content').append($about);
        $('.modal-content').append($availability);
        $('.modal-content').append($attendees);

        // change the border color just for fun
        $(this).css('border-color', 'red');
  })

    }
});




})

