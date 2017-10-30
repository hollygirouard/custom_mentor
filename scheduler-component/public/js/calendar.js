$(function() {
  //loadEvents();
  showTodaysDate();
  initializeCalendar();
  getCalendars();
  initializeRightCalendar();
  initializeLeftCalendar();
  disableEnter();
});

      var CLIENT_ID = "1082211045508-24i6a5fm8bl0hec44t5sbt6pdj9e0cn9.apps.googleusercontent.com";

     // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];

     // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces. you can add .readonly
      var SCOPES = 'https://www.googleapis.com/auth/calendar';

      var authorizeButton = document.getElementById("authorize-button");
      var signoutButton = document.getElementById("signout-button");

     /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        gapi.load("client:auth2", initClient);
      }

     /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
          discoveryDocs: DISCOVERY_DOCS,
          clientId: CLIENT_ID,
          scope: SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

         // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        });
      }

     /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          authorizeButton.style.display = "none";
          signoutButton.style.display = "block";
          listUpcomingEvents();
        } else {
          authorizeButton.style.display = "block";
          signoutButton.style.display = "none";
        }
      }

     /**
       *  Sign in the user upon button click.
       */
      function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

     /**
       *  Sign out the user upon button click.
       */
      function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }

     /**
       * Append a pre element to the body containing the given message
       * as its text node. Used to display the results of the API call.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        var pre = document.getElementById("content");
        var textContent = document.createTextNode(message + "\n");
        pre.appendChild(textContent);
      }

     /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user’s calendar. If no events are found an
       * appropriate message is printed.
       */
      function listUpcomingEvents() {
        gapi.client.calendar.events.list({
          "calendarId": "primary",
          "timeMin": (new Date()).toISOString(),
          "showDeleted": false,
          "singleEvents": true,
          "maxResults": 10,
          "orderBy": "startTime"
        }).then(function(response) {
          var events = response.result.items;
          appendPre("Upcoming events:");

         if (events.length > 0) {
            for (i = 0; i < events.length; i++) {
              var event = events[i];
              var when = event.start.dateTime;
              if (!when) {
                when = event.start.date;
              }
              appendPre(event.summary + "  (" + when + ")");
              console.log(event);
            }
          } else {
            appendPre("No upcoming events found.");
          }
        });
      }

/* --------------------------initialize calendar-------------------------- */
var initializeCalendar = function() {
  $('.calendar').fullCalendar({
      googleCalendarApiKey: 'AIzaSyAt86N0u_orMzltEnOIRyKjt6oSXPJNtg8',
      events: {
        googleCalendarId: '3mrav4b3fk331159sl4o9j122s@group.calendar.google.com'
      },
      // Oauth 1082211045508-t84a2amgknce7n3criuig2drequ2h862.apps.googleusercontent.com
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      // create events
      //events: events(),
      defaultTimedEventDuration: '00:30:00',
      forceEventDuration: true,
      eventBackgroundColor: '#337ab7',
      editable: false,
      height: screen.height - 160,
      timezone: 'America/Chicago',
    });
}

/*--------------------------calendar variables--------------------------*/
var getCalendars = function() {
  $cal = $('.calendar');
  $cal1 = $('#calendar1');
  $cal2 = $('#calendar2');
}

/* -------------------manage cal2 (right pane)------------------- */
var initializeRightCalendar = function()  {
  $cal2.fullCalendar('changeView', 'agendaDay');

  $cal2.fullCalendar('option', {
    slotEventOverlap: false,
    allDaySlot: false,
    header: {
      right: 'prev,next today'
    },
    selectable: true,
    selectHelper: true,
    select: function(start, end) {
        newEvent(start);
    },
    eventClick: function(calEvent, jsEvent, view) {
        editEvent(calEvent);
    },
  });
}

/* -------------------manage cal1 (left pane)------------------- */
var initializeLeftCalendar = function() {
  $cal1.fullCalendar('option', {
      header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek'
      },
      navLinks: false,
      dayClick: function(date) {
          cal2GoTo(date);
      },
      eventClick: function(calEvent) {
          cal2GoTo(calEvent.start);
      }
  });
}

/* -------------------moves right pane to date------------------- */
var cal2GoTo = function(date) {
  $cal2.fullCalendar('gotoDate', date);
}


//var loadEvents = function() {
 // $.getScript("js/events.js", function(){
 // });
//}


var newEvent = function(start) {
  $('input#title').val("");
  $('#newEvent').modal('show');
  $('#submit').unbind();
  $('#submit').on('click', function() {
  var title = $('input#title').val();
  if (title) {
    /*var eventData = {
        title: title,
        start: start
    };*/
   // $cal.fullCalendar('renderEvent', eventData, true);
   // Refer to the JavaScript quickstart on how to setup the environment:
// https://developers.google.com/google-apps/calendar/quickstart/js
// Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
// stored credentials.

    var event = {
      'summary': 'Google I/O 2015',
      'location': '800 Howard St., San Francisco, CA 94103',
      'description': 'A chance to hear more about Google\'s developer products.',
      'start': {
        'dateTime': '2017-11-01T09:00:00-07:00',
        'timeZone': 'America/Los_Angeles'
      },
      'end': {
        'dateTime': '2017-11-01T17:00:00-07:00',
        'timeZone': 'America/Los_Angeles'
      },
      // 'recurrence': [
      //   'RRULE:FREQ=DAILY;COUNT=2'
      // ],
      // 'attendees': [
      //   {'email': 'lpage@example.com'},
      //   {'email': 'sbrin@example.com'}
      // ],
      // 'reminders': {
      //   'useDefault': false,
      //   'overrides': [
      //     {'method': 'email', 'minutes': 24 * 60},
      //     {'method': 'popup', 'minutes': 10}
      //   ]
      // }
    };

    var request = gapi.client.calendar.events.insert({
      'calendarId': '3mrav4b3fk331159sl4o9j122s@group.calendar.google.com',
      'resource': event
    });

    request.execute(function(event) {
      appendPre('Event created: ' + event.htmlLink);
      console.log(event);
    });

    $('#newEvent').modal('hide');
    }
  else {
    alert("Title can't be blank. Please try again.")
  }
  });
}

var editEvent = function(calEvent) {
  $('input#editTitle').val(calEvent.title);
  $('#editEvent').modal('show');
  $('#update').unbind();
  $('#update').on('click', function() {
    var title = $('input#editTitle').val();
    $('#editEvent').modal('hide');
    var eventData;
    if (title) {
      calEvent.title = title
      $cal.fullCalendar('updateEvent', calEvent);
    } else {
    alert("Title can't be blank. Please try again.")
    }
  });
  $('#delete').on('click', function() {
    $('#delete').unbind();
    if (calEvent._id.includes("_fc")){
      $cal1.fullCalendar('removeEvents', [getCal1Id(calEvent._id)]);
      $cal2.fullCalendar('removeEvents', [calEvent._id]);
    } else {
      $cal.fullCalendar('removeEvents', [calEvent._id]);
    }
    $('#editEvent').modal('hide');
  });
}

/* --------------------------load date in navbar-------------------------- */
var showTodaysDate = function() {
  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  $("#todaysDate").html("Today is " + m + "/" + d + "/" + y);
};

/* full calendar gives newly created given different ids in month/week view
    and day view. create/edit event in day (right) view, so correct for
    id change to update in month/week (left)
  */
var getCal1Id = function(cal2Id) {
  var num = cal2Id.replace('_fc', '') - 1;
  var id = "_fc" + num;
  return id;
}

var disableEnter = function() {
  $('body').bind("keypress", function(e) {
      if (e.keyCode == 13) {
          e.preventDefault();
          return false;
      }
  });
}
