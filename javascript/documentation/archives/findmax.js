const findMax = (one, two, three) => {
  return one > two ? (one > three ? one : three) : two > three ? two : three;
};