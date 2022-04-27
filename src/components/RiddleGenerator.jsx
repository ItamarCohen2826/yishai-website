import { React, Component } from 'react';
/* import { fs } from 'fs';
// import '../App.css';
const riddles = []; */

export default class RiddleGenerator extends Component {
  
/*     AddRiddles() {
        setTimeout(function() {
            let rawdata = fs.readFileSync('src/components/riddle.json');
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
      } */
      GenerateRiddle() {
        const riddle = '?מה הירח הגדול במערכת השמש';
        const h2 = document.getElementById('riddle-content');
        h2.innerHTML = riddle;
        h2.hidden= false;
        
      }

      CheckAnswer () {
        const riddleOutput = document.getElementById('riddle-output');
        let value = document.getElementById('answer').value;
        console.log(value);
        value = value.toLowerCase();
        let isCorrect = false;
        if(value.trim() === 'sandy') {
          isCorrect = '!נכון';
        } else {
          isCorrect = '!לא נכון';
        }
        riddleOutput.innerHTML = isCorrect;
        riddleOutput.isHidden = false;
      }

      render () {
          return (
            <div className="content-shifter">
              <h2 id="riddle-content">מה שם המיזם מהשנה שעברה?</h2>

              {/* <button id="generator" onClick={this.GenerateRiddle}>Generate a riddle!</button> */}
              <input type="text" id="answer" className="answer" onSubmit={function(e) {e.preventDefault()}} required pattern="[a-zא-ת]{50}"></input>
              <button type="submit" id="checker" className="checker" onClick={this.CheckAnswer}>!בדיקת תשובה</button>
              <h2 hidden={true} id="riddle-output">.</h2>
            </div>
          )
      }
}