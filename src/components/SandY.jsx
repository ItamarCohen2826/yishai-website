import { React, Component } from 'react';
import sandy from '../images/sandy.jpeg';
import sandyTinker from '../images/sandyTinker.jpeg';
export default class SandY extends Component {
/*     constructor(props) {
        super(props);
    } */

    componentDidMount() {

    }

    componentDidUpdate() {
        
    }

    render() {
        return (
            <div className="content-shifter">
                <br />
                <h1 className="content">SandY</h1>
                <p className="sandy-content">
                 במהלך התחרות שנה שעברה תכננו לוויין בשם SandY:
<br />
הלוויינים אמורים לספק מידע מקיף לחוקרים על סופות האבק והחול ברחבי העולם במטרה לחקור את תכונותיהן.
<br />
 להבין את אופן היווצרותן ולהעמיק בחקר השפעתן על תופעות אקלימיות וביולוגיות על פני כדור הארץ.
 <br />
 אנו תכננו במחשב ובנינו דגם מודפס ומפורט של הלווין בעזרת מדפסת תלת-מימד.
                </p>
                <br />
                <img src={sandy} alt="sandy" className="sandy-pic" />
                <img src={sandyTinker} alt="sandy-tinker" className="sandy-tinker" />
            </div>        
            );
    }


}