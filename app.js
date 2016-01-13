'use strict';

let koa = require('koa');
let route = require('koa-route');
let serveStatic = require('koa-static');

const port = process.env.PORT || 5000;

// Create a Koa application
let app = koa();

// Serve up static files (the venue images)
app.use(serveStatic(`${__dirname}/public`));

// Set the Content-Type header to Shunter JSON
app.use(function *(next) {
	yield next;
	this.set('Content-Type', 'application/x-shunter+json');
});

// Home page route
app.use(route.get('/', require('./controller/home')));

// Random venue route
app.use(route.get('/random', require('./controller/random')));

// Venue route
app.use(route.get('/:slug', require('./controller/venue')));

// Handle application errors
app.on('error', function(error) {
	if (error.status !== 404) {
		console.error(error.stack);
	}
});

// Start the application
app.listen(port, function(error) {
	if (error) {
		console.error(error.stack);
		process.exit(1);
	}
	console.log('Application started on http://localhost:%d', port);
});
