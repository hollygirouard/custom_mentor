console.log('js loaded');
$(document).ready(function(){
	console.log("jQuery ready");
	$.ajax({
		type: 'get',
		url: '/users',
	})
	.done(function(data) {
		console.log(data);
		data.forEach(function(user) {
			$('#userlist').append('<li id=' + user._id + '>'+'USER EMAIL:  ' + user.local.email + '</li><button class="btn btn-primary">Sweet Button</button>');
		});
	});

});