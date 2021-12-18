import { React, Component } from 'react';
// import '../App.css';
class Calculators extends Component {
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
                <h1 className="content">מחשבונים וממירים</h1>
                <br />
                <a href="/aucalc" className="calculator-redirector">  המרה מיחידה אסטרונומית לקילומטרים</a>
                <br />
                <br />
                <a href="/kmcalc" className="calculator-redirector"> המרה מקילומטרים ליחידה אסטרונומית</a>
                <br />
                <br />
                <a href="/lycalc" className="calculator-redirector"> המרה משנות אור לקילומטרים</a>
                <br />
                <br />
                <a href="/kmlycalc" className="calculator-redirector">המרה מקילומטרים לשנות אור</a>
            </div>
        );
    }


}

export default Calculators;