import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    printOnFocus = () => {
        console.log('Good!')
    }

    printOnBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button
            onFocus={this.printOnFocus}
            onBlur={this.printOnBlur}>
            </button>
        )
    }
}
