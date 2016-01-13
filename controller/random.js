'use strict';

let VenueModel = require('../model/venue');

// Venue controller
module.exports = function *() {
	let venue = VenueModel.random();
	this.redirect(`/${venue.slug}`);
};
