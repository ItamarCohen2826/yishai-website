import { React, Component } from 'react';
import RiddleGenerator from './RiddleGenerator';


class Riddles extends Component {
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
                <h1 className="content">!חידות שבועיות</h1>
                <div className="riddle-content">
                    <RiddleGenerator />
                </div>
            </div>
        );
    }


}

export default Riddles;