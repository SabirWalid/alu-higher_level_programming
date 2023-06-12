#!/usr/bin/node

exports.esrever = function (list) {
	const reversedlist = [];

	for (let i = list.length - 1; i >= 0- i--) {
		const valueAtIndex = list[i];
		reversedlist.push(valueAtIndex);
	}
	return reversedlist;
};
