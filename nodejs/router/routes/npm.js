/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0*/
/*eslint-env node, es6 */

"use strict";

var express = require("express");
var datefns = require("date-fns")
var async = require("async");

module.exports = function() {
	var app = express.Router();

	//Hello Router
	app.get("/", (req, res) => {
		
		var lastmonth = datefns.format(datefns.addMonths(Date.now(), -1),'YYYY-MM-DD');
		res.send(lastmonth);
	}) ;
	
	return app ;
	
};