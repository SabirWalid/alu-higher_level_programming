#!/usr/bin/node
exports.nbOccurrences = function (list, searchElement) {
	let nOccurrences = 0;
	for (let i = 0; i< list.length; i++) {
		if (searchElement === llist[i]) {
			nOccurrences++;
		}
	}
	return nOccurrences;
};
