import React, {Component} from 'react';

import {Well, Button} from 'react-bootstrap';

const delay = (func, timeInMs = 1000) => {
    const immediateAction = new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, timeInMs);
    });
    immediateAction.then(func);
};

class CurrentTimeDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTime: '',
        };
    }

    componentDidMount() {
        delay(() => this.refreshTime());
    }

    refreshTime = () => {
        fetch('/api/time/now')
            .then(resp => {
                if (!resp.ok) throw Error(resp.statusText);
                return resp;
            })
            .then(result => result.text())
            .then(currentTime => {
                this.setState({currentTime})
            })
            .catch(err => this.handleError(err));
    };

    handleError = error => {
        console.error("hit error when getting local time", error);
    };

    render() {

        const {currentTime} = this.state;

        return (
            <React.Fragment>
                <Well> Current Time (from Time Service): {currentTime} </Well>
                <Button onClick={this.refreshTime}>Refresh</Button>
            </React.Fragment>
        );
    }

}

export default CurrentTimeDisplay;
