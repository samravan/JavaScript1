let drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];
let pointer = 0;
let count = 0;
while (drinkTray.length < 5) {
  drinkTray.push(drinkTypes[pointer])
  count++;
  if (count ==2) {
    pointer++;
    count = 0;
  };
  if (pointer >= drinkTypes.length) {
    pointer = 0;
  };
};
console.log(drinkTray);

