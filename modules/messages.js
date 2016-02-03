/** 

 * Messages Module

**/ 

var exp = require('express')();
var http = require('http');

module.exports = function(app){
	
	'use strict';

	return {

		/** 

		 * Receive the messages

		**/		

		receive : function(content) {

			app.messages.emit(content);
			
		},

		/** 

		 * Receive the messages

		**/		

		send : function() {

			app.socket.emit('newmessage', content);

		},

		/** 

		 * The user is typing

		**/		

		istyping : function() {

		
		}

	}	
};