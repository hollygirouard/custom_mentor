console.log('js working');
$(document).ready(function(){


	email = $('#email').val();

	id = $(this).attr('recipient_id');

	$('#newMessage').on('submit', function(event) {
      event.preventDefault();
		$.ajax({
	  		type: 'post',
      		url: '/users',
      		data:({ id: recipient_id,
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