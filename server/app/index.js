

var app = require('express')();
var path = require('path');
var User = require('../api/users/user.model');
var passport = require('passport');
var session = require('express-session');
app.use(session({
    // this mandatory configuration ensures that session IDs are not predictable
    secret: 'tongiscool' // or whatever you like
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(require('./logging.middleware'));

app.use(require('./requestState.middleware'));

app.use(require('./statics.middleware'));


app.use('/api', require('../api/api.router'));
app.use('/auth', require('../api/auth.routes'));




app.post('/login', function (req, res, next) {
		User.findOne({email: req.body.email, password: req.body.password})
    .then(function (user) {
			if (!user)
				res.sendStatus(404);
			req.session.userId = user._id;
			res.sendStatus(200);
    }, next);
});

app.post('/signup', function(req,res,next){
	User.create(req.body).then(function(user){
		req.session.userId = user._id;
		res.sendStatus(200);
	}, next);
});

app.post('/signout', function(req,res,next){
	delete req.session['userId'];
	req.session.destroy();
	res.sendStatus(200);
});




// app.use(function (req, res, next) {
//     console.log('session', req.session);
//     next();
// });
// app.use(function (req, res, next) {
// 	console.log('got here');
//   if (!req.session.counter) req.session.counter = 0;
//   console.log('counter', ++req.session.counter);
//   next();
// });


var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
	app.get(stateRoute, function (req, res) {
		res.sendFile(indexPath);
	});
});

app.use(require('./error.middleware'));

module.exports = app;
