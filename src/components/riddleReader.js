const fs = require('fs');
const riddles = [];
function addRiddles() {
  let rawdata = fs.readFileSync('./src/components/riddle.json');
  
  let riddle = JSON.parse(rawdata);
  let data = JSON.stringify(riddle, null, 2);
  const riddleObject = JSON.parse(data);
  const size = Object.keys(riddleObject).length;
  for (let i in riddleObject) {
    if(riddleObject.hasOwnProperty(i)) {
      riddles.push(riddleObject[i]);
    }
  }
}

function getRiddle() {
  const num = Math.floor(Math.random() * riddles.length);
  const riddle = riddles[num];
  console.log(riddle);
  
}

addRiddles();
getRiddle();