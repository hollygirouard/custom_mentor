$(document).ready(function() {
	// page is now ready, initialize the calendar...
	$('#calendar').fullCalendar({
        // put your options and callbacks here
        googleCalendarApiKey: 'AIzaSyAt86N0u_orMzltEnOIRyKjt6oSXPJNtg8',
        events: {
            googleCalendarId: '3mrav4b3fk331159sl4o9j122s@group.calendar.google.com'
        },
      // dayClick: function() {
      //  alert('a day has been clicked!');
   // },

   		defaultView: 'agendaWeek',
      	editable: true,
        selectable: true,
      //header and other values
      	select: function(start, end, allDay) { // select
          endtime = $.fullCalendar.formatDate(end,'h:mm tt');
          starttime = $.fullCalendar.formatDate(start,'ddd, MMM d, h:mm tt');
          var mywhen = starttime + ' - ' + endtime;
           $('#createEventModal #apptStartTime').val(start);
           $('#createEventModal #apptEndTime').val(end);
           $('#createEventModal #apptAllDay').val(allDay);
           $('#createEventModal #when').text(mywhen);
           $('#createEventModal').modal('show');
       }
    });

  $('#submitButton').on('click', function(e){
    // We don't want this to act as a link so cancel the link action
    e.preventDefault();

    doSubmit();
  });

  function doSubmit(){
    $("#createEventModal").modal('hide');
    console.log($('#apptStartTime').val());
    console.log($('#apptEndTime').val());
    console.log($('#apptAllDay').val());
    alert("form submitted");
        
    $("#calendar").fullCalendar('renderEvent',
        {
            title: $('#patientName').val(),
            start: new Date($('#apptStartTime').val()),
            end: new Date($('#apptEndTime').val()),
            allDay: ($('#apptAllDay').val() == "true"),
        },
        true);
   }


});


