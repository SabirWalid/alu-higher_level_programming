#!/usr/bin/node
let callCount = 0;

exports.logme = function (item) {
	console.log('${callCount}: ${item}');
	callCount += 1;
};
