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
                <h1 className="content">צרו קשר!</h1>
                <h2 className="check">space.project.yishai@gmail.com</h2>
                <a className="contact-details" target="_blank" rel="noreferrer" href="https://www.instagram.com/space_project_yshay/"> אינסטגרם</a>
                <br />
                <a className="contact-details" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100077308665402"> פייסבוק</a>
                <br />
                <a className="contact-details" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCdUoTa3jG6h9SidnQp0ZLUw">יוטיוב</a>
                <br />

            </div>
        );
    }


}

export default Contact;