// code your solution here
const superbowlWin = (array) => {
  return array.find(findWinner) ? array.find(findWinner).year : undefined;
};

const findWinner = (object) => object.result === "W";
