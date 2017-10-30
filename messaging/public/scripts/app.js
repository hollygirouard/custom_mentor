console.log('js working');
$(document).ready(function(){


	email = $('#email').val();

	id = $(this).attr('recipient_id');

	$('#btn-chat').on('click', function(event) {
      event.preventDefault();
		$.ajax({
	  		type: 'post',
      		url: '/messages/59f61dbfde3d8554a0d5648e',
      		data:({ 
      			sender_id: "59f73fdde1e37857977e7eb5",
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