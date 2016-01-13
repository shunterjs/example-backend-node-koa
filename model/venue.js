'use strict';

let venueData = require('../data/venues.json');

// Venue model
module.exports = {

	// Get all venues
	all: () => venueData,

	// Get a single venue by slug
	findBySlug: (slug) => {
		return venueData.filter((venue) => {
			return venue.slug === slug;
		})[0];
	},

	// Get a random venue
	random: () => venueData[Math.floor(Math.random() * venueData.length)]

};
