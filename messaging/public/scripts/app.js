console.log('js working');
$(document).ready(function(){

/*Requesting the users from the data base*/
  $.ajax({
    type: 'get',
    url: '/users',
  })
  /*appending each user to a new button with list functionality*/
  .done(function(data) {
    console.log(data);
    data.forEach(function(user) {
      $('.table').append('<a type="button" class= "btn" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">' +user.local.email+ '</a>');
    });
  });

/*add the user list to the table*/
  $('#userList').on('click', 'button', function(){
    console.log($(this).attr('id'));
    $('.table').empty();
  });

/*send button pressed push data to conversations*/
  $('#newMessage').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'post',
      url: '/conversations',
      data:({ id: recipient_id,
      })
    });
  });

/*getting the content from the database to bring to the screen*/
	$('#btn-chat').on('click', function(event) {
    event.preventDefault();
		$.ajax({
	  	type: 'post',
      url: '/messages/59f61dbfde3d8554a0d5648e',
      data:({ 
      content: "Wow this is sweet",
      conversation_id: "59f61dbfde3d8554a0d5648e"
      })
    });
	});


	console.log('query ready');
	$( "#chatNow" ).click(function() {
	    $( "#chatbox" ).slideToggle( "slow");
	    if($(this).hasClass('show')){
	    	$('#chatbox').animate({bottom: '0px'}, 'fast');
	        $(this).removeClass('show').addClass('hide');
	        
	    } else {
	        $('#chatbox').animate({bottom: '0px'}, 'fast');
	        $(this).removeClass('hide').addClass('show');
	    }
	});
});