console.log('js working');
$(document).ready(function(){


	name = $('#name').val();

	email = $('#email').val();

	id = $(this).attr('data-id');

	$.ajax({
	  type: 'put',
      url: '/messaging',
      data:({ id: recipient_id,
              email: email
      })
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