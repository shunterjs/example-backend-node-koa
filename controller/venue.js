'use strict';

let VenueModel = require('../model/venue');

// Venue controller
module.exports = function *(slug) {
	let venue = VenueModel.findBySlug(slug);
	if (!venue) {
		return this.throw(404);
	}
	this.body = {
		layout: {
			template: 'venue'
		},
		data: {
			title: `${venue.name} - Lunch Places`,
			venue
		}
	};
};
