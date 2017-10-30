$(function() {

    $.ajax({
            url: '/blogs',
            type: 'GET',
        })
        .done(function(data) {
            console.log("successful blog retrieve");
            $('#blog-container').empty().append(render(data.blogs));
            $('.toggleData').hide();
            $('.card-header').on('click', 'button', function(event) {
            	console.log($(this).closest('.card').find('.card-body'));
            	$(this).closest('.card').find('.toggleData').slideToggle('fast');
            });
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });





});


const render = blogs => {
  let blogshtml = "";

  if (blogs.length === 0) return "<p>Blogs Coming soon!</p>";
  else blogs.forEach(blog => {
      let blogStr = `
      <div class="card" blog-id=${blog._id}>
      	<div class="card-header"><h4>${blog.title} - <small class='text-muted'>${(new Date(blog.date).toLocaleString())}</small><button class="btn btn-outline-secondary btn-sm float-right">Show More</button> </h4></div>
				<div class='toggleData'><div class="card-body">${blog.content}</div>
								<div class="card-footer">
				<button class="btn btn-primary btn-share"><i class="fa fa-twitter" aria-hidden="true"></i> Tweet</button>
				<button class="btn btn-primary btn-share"><i class="fa fa-facebook" aria-hidden="true"></i> Like</button>
				<button class="btn btn-primary btn-share"><i class="fa fa-reddit" aria-hidden="true"></i> Share</button>
				</div>
				</div>
			</div>`;
      blogshtml = blogStr + blogshtml;
  });
  return blogshtml;
};