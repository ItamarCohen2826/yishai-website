import { React, Component } from 'react';
// import ? from '../images/?.jpeg';

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
:הרצאות
<br />
.כחלק מהשלב השני אנחנו מקיימים כמה הרצאות לקהלים ויעדים שונים
<br />
:מפגשי חשיפה
<br />
23.12.21 בשעה 17:00-18:00
<br />
23.12.21 בשעה 18:30-19:30
<br />
:האקאתון
<br />
6.1.21 בשעה 17:00-18:30
<br />
6.1.21 בשעה 18:30-20:00 
<br />
:מפגשים מיוחדים
<br />
הרצאה והאקאתון לתלמידי מרכז יש״י ב-3.1.21 בשעה 15:30-17:00
<br />
הרצאה והאקאתון לחטיבות ביניים בכפר סבא ב-7.1.21 בשעה 8:15-11:30 
<br />
<strong>
אם לא קיבלתם הזמנה ממנהלי בית ספרכם, מוזמנים לפנות אלינו
</strong>
<br />
                </p>
                {/* <img src={} alt="our team" className="team-pic" /> */}
            </div>        
            );
    }


}