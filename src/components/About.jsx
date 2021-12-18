import { React, Component } from 'react';
import team from '../images/team.jpeg';

export default class About extends Component {
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
                <h1 className="content">עלינו</h1>
                <p className="about-content">
                .אנו קבוצת חוקרים צעירים ממרכז יש”י שנמצא בכפר סבא
                
                .אנחנו משתתפים בתחרות החלל על שם אילן רמון
                <br />
,בשנה שעברה, זכינו באולימפיאדת החלל על שם אילן רמון
 ,ובמסגרת התחרות השתתפנו בחידוני ידע בנושא חלל
<br />
 
,עקבנו ברציפות במשך ימים ולילות אחר תנועתם של לוויינים

,בנינו פעילות חינוכית לקהל הרחב בנושא חקר מאדים
<br />
.SandY ותכננו מערכת של לווייני תצפית בשם 
 
<br />
.השנה נגשנו לתחרות פעם נוספת   
<br />  
.כרגע, אנחנו נמצאים בשלב השני של התחרות ואנו יוזמים הקאתון והרצאות
                </p>
                <img src={team} alt="our team" className="team-pic" />
            </div>        
            );
    }


}