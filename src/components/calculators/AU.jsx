import { React, Component } from 'react';
let data = [];
class AU extends Component {
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
    const h2 = document.getElementById('au-output');
    data.splice(0, data.length);
    const au = this.state.value;
    let km =  149597870.7;
    let convertedDist = au * km;
    h2.innerHTML = `${convertedDist} km`;
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
                <h1 className="content">המרה מיחידה אסטרונומית לקילומטרים</h1>
                <br />
                <form id="converter" className="converter" onSubmit={this.handleSubmit} >
                  <button type="submit" className="submit" id="au-submit">!המר</button>
                  <input type="number" name="auInput" className="au-input" id="au-input" placeholder="au" value={this.state.value} onChange={this.handleChange} />
                </form>
                <h2 style={{hidden: true}} className="output" id="au-output">.</h2>  
                <a className="calculator-redirector" href="/calculators">חזרה למחשבונים</a> 
            </div>
        );
    }

}

export default AU;