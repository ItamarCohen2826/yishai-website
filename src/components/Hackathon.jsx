import { React, Component } from 'react';
// import ? from '../images/?.jpeg';
import firstPlace from '../images/firstPlace.jpeg';
import firstPlaceTeam from '../images/firstPlaceTeam.png';

export default class Hackathon extends Component {
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
                <h1 className="content">האקאתון והרצאות</h1>
                <p className="hackathon-content">
                כחלק מהשלב השני אנחנו מקיימים כמה הרצאות לקהלים ויעדים שונים.
<br />
<strong>
                התקיימו:
                </strong>
<br />
לתלמידי כיתות ו׳-ט׳  בעיר כפר סבא
<br />
מפגש חשיפה בתאריך 27.12.2021 בשעות 15:30 - 17:00
<br />
האקאתון בתאריך 3.1.2022, בשעות 15:30 - 18:45
<br />
לתלמידי יסודי במרכזי מחוננים בארץ (בזום)
<br />
מפגש חשיפה בתאריך 23.12.21 בשעה 17:00 - 18:00
<br />
האקאתון בתאריך 6.1.2022 בשעה 17:00 - 18:30
<br />
לתלמידי יסודי במרכז יש״י ובני משפחותיהם
<br />
מפגש חשיפה בתאריך 23.12.21 בשעה 18:30 - 19:30
<br />
האקאתון בתאריך 6.1.2022 בשעה 18:30 - 20:00
<br />
<strong>
    !שימו לב, כל ההאקאתונים וההרצאות התקיימו
</strong>
<br />
</p>
<h2>
הזוכה הגדול בהאקאתון של מרכז יש״י: 
</h2>
<h2 className="winner-title">מלון האלים:</h2>
<p className="hackathon-content">
הקמת בית מלון ליד הר האולימפוס מונס במאדים.
<br />

 בית המלון אמור להיבנות אחרי התבססות האנושות במאדים
 <br />

  והוא עתיד לשמש לאירוח של אנשים פרטיים ושל מדענים שיעסקו במחקר של ההר וסביבתו.
  <br />

  המתחם יכלול מבני מגורים, תחנת חשמל שפועלת על טורבינות רוח  
  <br />

  ואנרגיה סולארית וגם מצפה כוכבים ומעבדות.
  <br />

לפי המודל העסקי המוצע בית המלון יהפוך לרווחי תוך שנים ספורות.
                </p>
                <div className="aligner-hackathon">
                    <img className="firstPlace-pic" src={firstPlace} alt="First Place!" height={200} width={200} />
                    <img className="firstPlaceTeam-pic" src={firstPlaceTeam} alt="First Place Winners!" height={200} width={300} />

                </div>
            </div>        
            );
    }


}