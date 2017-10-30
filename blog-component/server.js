const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog-cm');

let UserSchema = mongoose.Schema({
	username: String,
	password: String,
});

let BlogSchema = mongoose.Schema({
	title: String,
	date: { type: Date, default: Date.now },
	content: String,
});

let User = mongoose.model('User', UserSchema);
let Blog = mongoose.model('Blog', BlogSchema);

app.set('views', __dirname);
app.engine('ejs' , require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded());


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
	//res.sendFile(__dirname+ '/index.html');
	Blog.find({}, (err, blogs) => {
		res.sendFile(__dirname + '/blogs.html');
	});
});

app.post('/', (req, res) => {
	Blog.create(req.body,(err, blog) => {
		res.send(blog);
	});
});

app.get('/blogs', (req, res) => {
	Blog.find({}, (err, blogs) => {
		res.json(blogs);
	});
});

app.get('/blogs/:id', (req, res )=> {
	Blog.findOne({_id: req.params.id}, (err, blog) =>{
		res.json(blog);
	});
});

app.get('/newsfeed', (req, res) => {
	res.sendFile(__dirname+ '/newsfeed.html');
});

app.get('/composer', (req, res) => {
	res.sendFile(__dirname+ '/composer.html');
});

app.listen(3000);