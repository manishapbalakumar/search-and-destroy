'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let rootIndex = Math.floor(array.length/2);
	// if (array.length === 1 && target !== array[0]){
	// 	return false;
	// }
	// else if (array.length === 1 && target === array[0]){
	// 	return true;
	// }

	if (target === array[rootIndex]){
		return true;
	} else if (target < array[rootIndex]){
		let newArr = array.splice(0, rootIndex);
		return binarySearch(newArr, target);
	} else if (target > array[rootIndex]){
		let newArr = array.splice(rootIndex + 1);
		return binarySearch(newArr, target);
	} else {
		return false;
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
