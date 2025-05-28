function fun1(...allpera) {
  let sumAmount = allpera.reduce((initalValue, currentValue) => {
    return (initalValue += currentValue);
  });
  return sumAmount;
}
let sumTotal = fun1(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.table(sumTotal);

const apiRequest = (callback1) => {
  setTimeout(() => {
    console.table(["request gese"]);
    callback1();
  }, 1500);
};
const dataFetch = (callback2) => {
  setTimeout(() => {
    console.table(["data astese"]);
    callback2();
  }, 1650);
};
const display = () => {
  console.table(["gan", "movie", "games"]);
};
apiRequest(() => {
  dataFetch(() => {
    display();
  });
});
