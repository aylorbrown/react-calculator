import React from 'react';


export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            num1: 0, 
            num2: 0, 
            result: 0
        }
    }
    render() {
        return (
            <div>
                <h1>The best calculator</h1>
                <input 
                type="number" 
                value={this.state.num1}
                onChange={(event) => {
                    this._updateNumber('num1', event.target.value);
                }}
                />
                <input 
                type="number" 
                value={this.state.num2}
                onChange={(event) => {
                    this._updateNumber('num2', event.target.value);
                }}
                />
                <br />
                <br />
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <br />
                <div></div>

            </div>


        );
    }

    // helper function 
    _updateNumber = (key, newNumber) => {
        this.setState({
            // use variable as a key with []
            [key]: newNumber

        });
    }


}