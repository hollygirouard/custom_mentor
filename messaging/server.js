const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'CUSTOM-MENTOR'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

app.use(function(request, response, next) {
	response.locals.currentUser = request.user;
	next();
});

 let routes = require('./config/routes');
 app.use(routes);

app.listen(process.env.PORT || 3000, function() {
	console.log("Go to localhost 3000");
});