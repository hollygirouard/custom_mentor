console.log('js working');
$(document).ready(function(){


	email = $('#email').val();

    id = $(this).attr('recipient_id');

<<<<<<< HEAD
    $('#email').on('load', function(event) {
        console.log(email);
    $.ajax({
              type: 'get',
              url: '/messages',
              data:({ email: email,
              })
          });
    });

    $('#newMessage').on('submit', function(event) {
      event.preventDefault();
        $.ajax({
              type: 'post',
              url: '/conversations',
              data:({ id: recipient_id,
          })
        });
    });
=======
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
>>>>>>> b6869fab6a3555bb8e659ea780bf6d0bf1c39022

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