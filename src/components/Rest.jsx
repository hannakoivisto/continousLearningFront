import React, { Component } from 'react';
import Rest from './Topiccompiler';

export default class Topiccompiler extends Component {
    state = { data: [] }
    componentDidMount = () => {
        this.xhr = new XMLHttpRequest();
        this.xhr.onreadystatechange = this.onReadyStateChanged;
        this.xhr.open('GET', '/api/topics', true);
        this.xhr.send();
    }
    onReadyStateChanged = () => {
        if (this.xhr.readyState === 4 && this.xhr.status === 200) {
            this.setState({ data: JSON.parse(this.xhr.responseText) });
        }
    }
    render() {
        console.log(this.state.data);
        return (
            <Rest rest={this.state.data} />
        )
    }
}
