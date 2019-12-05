import React, { Component } from 'react'
import { getSingleTopic, deleteTopicWithId } from '../service/apiclient'
import { Link } from 'react-router-dom'
import { format } from 'path'
//import button react bootstrap

export default class TopicDetails extends Component {
    state = { topic: null }
    componentDidMount() {
        const id = this.props.match.params.id
        getSingleTopic(id).then(topic => {
            this.setState({ topic })
        }).catch(err => {
            alert(`Error fetching topic: ${err.message}`)
        })
    }
    deleteTopic = () => {
        deleteTopicWithId(this.state.topic.id).then(async response => {
            if (response.status === 200) {
                window.alert("Delete");
                this.props.history.push("/topics");
            }
            else {
                const message = await response.json();
                alert(`Something went wrong ${response.status} - ${response.statusText}`);
                console.log(message);

            }
        })
    }
    render() {
        const { id, title, description, timetomaster, timespent, source, startlearningdate, inprogress } = this.state.topic
        return (
            <div>
                <h1>Topic #{id}</h1>
                <h3>Details</h3>
                <div>
                    <p className='topic'>{topic}</p>
                    <p> {title}, {description}, {timetomaster}, {timespent}, {source}, {startlearningdate}, {inprogress} </p>
                </div>
            </div>
        )
    }
}
