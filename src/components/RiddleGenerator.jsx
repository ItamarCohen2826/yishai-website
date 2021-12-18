import { React, Component } from 'react';
import { fs } from 'fs';
// import '../App.css';
const riddles = [];

export default class RiddleGenerator extends Component {
    AddRiddles() {
        setTimeout(function() {
            let rawdata = fs.readFileSync('./src/components/riddle.json');
            let riddle = JSON.parse(rawdata);
            let data = JSON.stringify(riddle, null, 2);
            console.log(data);
            const riddleObject = JSON.parse(data);
            for (let i in riddleObject) {
            if(riddleObject.hasOwnProperty(i)) {
                riddles.push(riddleObject[i]);
            }
            }
        }, 3000)
      }
      
      GetRiddle() {
        const num = Math.floor(Math.random() * riddles.length);
        const riddle = riddles[num];
        console.log(riddle);
        const h2 = document.getElementById('riddle-content');
        h2.innerHTML = riddle;
      }

      render () {
          return (
            <div className="content-shifter">
              <h2 id="riddle-content">.</h2>
              <button onClick={this.AddRiddles}>Generate a riddle!</button>
            </div>
          )
      }
}