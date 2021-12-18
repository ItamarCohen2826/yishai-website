// 1.05702341 × 10-13
import { React, Component } from 'react';
let data = [];
class KMtoLY extends Component {
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
    let km =  0.000000000000105702341;
    let convertedDist = ly * km;
    h2.innerHTML = `${convertedDist} שנות אור`;
    h2.isHidden = false;
    if(convertedDist === 0) {
      h2.isHidden = true;
    }
    event.preventDefault();
  }

    componentDidMount() {
    }
    

    componentDidUpdate() {
        
    }

    render() {
        return(
            <div className="content-shifter">
                <h1 className="content">המרה מקילומטרים לשנות אור</h1>
                <br />
                <form id="converter" className="converter" onSubmit={this.handleSubmit} >
                  <button type="submit" className="submit" id="au-submit">!המר</button>
                  <input type="number" name="kmInput" className="km-input" id="km-input" placeholder="km" value={this.state.value} onChange={this.handleChange} />
                </form>
                <h2 style={{hidden: true}} className="output" id="ly-output">.</h2>  
                <a className="calculator-redirector" href="/calculators">חזרה למחשבונים</a> 
            </div>
        );
    }

}

export default KMtoLY;