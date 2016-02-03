/** 

 * Server Maintenance Module

**/ 

var exp = require('express')();
var http = require('http');

module.exports = function(app){
	
	'use strict';

	return {

		_server : null,

		create : function() {

			this._server = http.createServer(exp);

			this.route();
			this.listen();
		},

		/** 

		 * Activate the listening on the port

		**/

		listen : function() {

			this._server.listen(1337, function () {
				console.log('Mon serveur tourne sur 1337 !');
			});
		},

		/** 

		 * Define routes
			
		**/

		route : function() {

			exp.get('/', function (req, res) {
				res.sendFile(app.root_path + '/templates/chat.html');
			});
		}
	}	
};