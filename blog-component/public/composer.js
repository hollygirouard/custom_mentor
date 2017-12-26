
/*************************
 *Quill Text Editor Setup*
 *************************/

/* toolbar options */
var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent

    [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean'],
    ['link','image'] // remove formatting button
];

/* Initialize quill in #editor div */
var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions
    },
    theme: 'snow'
});


/*************************
 *Handle Blog Post Submit*
 *************************/

$('form').on('submit', (event) => {
    event.preventDefault();
    $.ajax({
        url: '/',
        type: 'POST',
        data: {title: $('#blog-title').val(), content: $('.ql-editor').html()},
    })
    .done(function(data) {
        console.log("success");
        console.log(data);
        window.location.href = '/';
    })
    .fail(function(err) {
        console.log(err);
        $('.alertcontainer').html($('<div>').addClass('alert alert-danger').text(err.statusText));
        $('body').scrollTop(0);
    })
    .always(function() {
        console.log("complete");
    });
});