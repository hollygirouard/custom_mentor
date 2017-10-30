// GET /
function home(req, res, next) {
	res.render('index');
}

// GET /userlist
function userlist(req, res, next) {
	res.render('userlist');
}

module.exports = {
	home: home,
	userlist: userlist
};