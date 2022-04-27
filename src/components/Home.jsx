import { React, Component } from 'react';
import dronePic from '../images/dronePic.jpeg';
// import '../App.css';
class Home extends Component {
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
                <h1 className="content">בית</h1>
                <p className="home-content">
                    .אנחנו הנבחרת של מרכז יש״י, וזה האתר שלנו
                    <br />
                    ,כאן תמצאו מידע לגבי ההאקאתון והההרצאות, חידות יומיות
                    <br />
                    .ומחשבונים וממירים שיעזרו לכם 
                    <br />
                    ,בנוסף, אם תרצו לדעת את זמני המפגשים ותאריך ההאקתון
                    <br />
                    .לחצו על הלשונית 
                    <br />
                    .על מנת ליצור איתנו קשר, פנו למייל שנמצא בלשונית הצרו קשר
                    <br />
                    ,מקווים שתהנו
                    <br />
                    <strong>.נבחרת מרכז יש״י</strong> 
                </p>
                <img src={dronePic} alt="us" className="us"/>
                <div className="copyright-shifter">
                    <h3 className="copyright">© Merkaz Yishai 2021</h3>
                </div>
            </div>
        );
    }


}

export default Home;