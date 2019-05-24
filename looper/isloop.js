'use strict';

//Complete this algo
const isLoop = linkedlist => {
  const counterObj = {};
  let currentNode = linkedlist.head;
  while (currentNode !== null) {
    if (currentNode.value) {
      if (counterObj[currentNode.value]) {
        return true;
      } else {
        counterObj[currentNode.value] = 1;
        currentNode = currentNode.next;
      }
      return false;
    }
  }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
