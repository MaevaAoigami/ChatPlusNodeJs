/**

 * Socket Handler Module

**/

module.exports = function(app) {

	'use strict';

	return {

		io : null,

		/**

		 * Init the app.socket.io variable 

		**/

		init : function() {

			this.io = require('socket.io')(app.server._server);

			this.listen();

		},

		/**

		 * Define the socket 'on' listener

		**/ 

		listen : function() {

			this.io.on('connection', function(socket){
				console.log('un user est connecté');

				socket.on('msg', function(content){
					console.log(content);

					app.socket.io.emit('confirm', 'Bien reçu ! Signé : le serveur')
				});

			});
		}

	}
};