import React, { Component } from 'react'
//import Topic komponentti tänne?
import { getAllTopics, deleteTopicWithId } from '../service/apiclient'

export default class TopicList extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }
    componentDidMount() {
        this.fetchTopicList();
    }
    fetchTopicList = () => {
        getAllTopics().then(items => {
            this.setState({ items });
        })
    }
    //delete tänne? Toimiiko noin?
    deleteSingleTopic = id => {
        deleteTopicWithId(id).then(response => {
            if (response.status !== 200) {
                alert("Error, status: " + response.status);
            }
            this.fetchTopicList();
        })
    }
    //vaatii toimiakseen Topic-komponentin (joka importata)
    render() {
        const topicitems = this.state.items
            .map(item => {
                return (
                    <Topic {...this.props} topic={item} key={item.id} />
                )
            })
        return (
            <div className="TopicList">
                <h2>Topic list</h2>
                {topicitems}
            </div>
        )
    }
}
