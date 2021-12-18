import { React, Component } from 'react';
let data = [];
class KM extends Component {
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
    const h2 = document.getElementById('km-output');
    data.splice(0, data.length);
    const au = this.state.value;
    let km =  149597870.7;
    let convertedDist = au / km;
    h2.innerHTML = `${convertedDist} au`;
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
                <h1 className="content">המרת קילומטרים ליחידה אסטרונומית</h1>
                <br />
                <form id="converter" className="converter" onSubmit={this.handleSubmit} >
                  <button type="submit" className="submit" id="km-submit">!המר</button>
                  <input type="number" name="kmInput" className="km-input" id="km-input" placeholder="KM" value={this.state.value} onChange={this.handleChange} />
                </form>
                <h2 className="output" id="km-output">.</h2> 
                <a className="calculator-redirector" href="/calculators">חזרה למחשבונים</a>   
            </div>
        );
    }

}

export default KM;