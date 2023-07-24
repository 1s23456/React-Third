import React, { Component } from 'react';

export default class DisplayForm extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        return (
            <div>
                <div className='output'>
                    {this.props.value.map((employee, index) => (
                        <p className='data' key={index}>
                            Name: {employee.name} |
                            Department: {employee.dept} |
                            Rate: {employee.rate}
                        </p>
                    ))}
                </div>
                <button onClick={this.props.toggleFunc}>Go Back</button>
                )
            </div>
        );
    }
}