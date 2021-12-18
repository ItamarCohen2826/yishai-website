import { React, Component } from 'react';
let data = [];
class LY extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);     
    }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const h2 = document.getElementById('ly-output');
    data.splice(0, data.length);
    const ly = this.state.value;
    let km =  9.4605284e12;
    let convertedDist = ly * km;
    h2.innerHTML = convertedDist;
    h2.isHidden = false;
    event.preventDefault();
  }

    componentDidMount() {
    }
    

    componentDidUpdate() {
        
    }

    render() {
        return(
            <div className="content-shifter">
                <h1 className="content">!המרת שנת אור לקילומטרים</h1>
                <br />
                <form id="converter" className="converter" onSubmit={this.handleSubmit} >
                  <button type="submit" className="submit" id="ly-submit">!המר</button>
                  <input type="number" name="lyInput" className="ly-input" id="ly-input" placeholder="שנות אור" value={this.state.value} onChange={this.handleChange} />
                </form>
                <h2 className="output" id="ly-output">.</h2> 
                <a className="calculator-redirector" href="/calculators">חזרה למחשבונים</a>   
            </div>
        );
    }

}

export default LY;