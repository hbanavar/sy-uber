/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
		uuid: {
			type: 'string',
			unique: true,
			required: true
		},
		firstName: {
			type: 'string'
		},
		lastName: {
			type: 'string'
		},
		email: {
			type: 'string'
		},
		picture: {
			type: 'string'
		},
		accessToken: {
			type: 'string'
		},
		refreshToken: {
			type: 'string'
		}
	}
};