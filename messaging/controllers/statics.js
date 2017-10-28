// GET /
function home(req, res, next) {
	res.render('index');
}

module.exports = {
	home: home
};