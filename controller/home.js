'use strict';

let VenueModel = require('../model/venue');

// Home controller
module.exports = function *() {
	this.body = {
		layout: {
			template: 'home'
		},
		data: {
			title: 'Lunch Places',
			venues: VenueModel.all()
		}
	};
};
