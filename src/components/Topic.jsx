import React, { Component } from 'react'
//import button react bootstrap

export default class Topic extends Component {
    deleteTopic = () => {
        this.props.deleteCallback(this.props.topic.id);
    }
    render() {
        const { id, title, description, timetomaster, timespent, source, startlearningdate, inprogress } = this.props.topic;
        return (
            <div className="Topic">
                <span onClick={() => this.props.history.push(`/topics/${this.props.topic.id}`)} className="title">{title}</span>
                <p className="description">{description}</p>
                <p className="timetomaster">{timetomaster}</p>
                <p className="timespent">{timespent}</p>
                <p className="source">{source}</p>
                <p className="startlearningdate">{startlearningdate}</p>
                <p className="inprogress">{inprogress}</p>
                <p><Button type="button" className="buttoni" onClick={this.deleteTopic}>Delete</Button>
                </p>
            </div>
        )
    }
}
