import { React, Component } from 'react';
// import '../App.css';
class Contact extends Component {
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
                <h1 className="content">!צרו קשר</h1>
                <h2 className="contact-details">space.project.yishai@gmail.com</h2>
                <h2 className="contact-details">@space_project_yshay :באינסטגרם</h2>
                <h2 className="contact-details">Mercaz Yshay :בפייסבוק</h2>
                <h2 className="contact-details"> ביוטיוב: אולימפיאדת החלל מרכז יש״י</h2>

            </div>
        );
    }


}

export default Contact;