import { React, Component } from 'react';
// import '../App.css';
import lom from '../images/lom.png';
class Lom extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        
    }

    render() {
        return(
            <div className="content-shifter">
                <br />
                <h1 className="content">L.O.M</h1>
                <br />
                <div className='circle'>
                    <img src={lom} alt="lom" className='lom-img' />
                </div>
                <br />
                <p id="content" className='lom-content'>
                לאחר חודשיים מאומצים של עבודה בשלב חצי הגמר,
                <br />
                 סיימנו לתכנן מיזם עתידי בתחום החלל.
                 <br />
מטרת המיזם היא לספק מים, חמצן וחשמל להתיישבות של 1000 איש במאדים בשנת 2040.
<br />
האספקה תחובר למגורי בני אדם, חממות לגידול צמחים, מעבדות ומפעלים. כמו כן יוצבו נקודות
<br />
הטענה לכלי רכב חשמליים. המיזם יתרחב בעתיד בהתאם לגידול באוכלוסייה.
<br />
                </p>
            </div>
        );
    }


}

export default Lom;