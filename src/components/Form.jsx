import React, { Component } from 'react'
import { createTopic } from '../service/apiclient'

export default class Form extends Component {
    state = { title: '', description: '', timetomaster: '', timespent: '', source: '', startlearningdate: '', inprogress: true };
    titleChanged = e => {
        console.dir(e.target);
        this.setState({ [e.target.name]: e.target.value })
    }
    descriptionChanged = e => {
        this.setState({ description: e.target.value })
    }
    timeMasterChanged = e => {
        console.dir(e.target);
        this.setState({ timetomaster: e.target.value })
    }
    timeSpentChanged = e => {
        this.setState({ timespent: e.target.value })
    }
    sourceChanged = e => {
        this.setState({ source: e.target.value })
    }
    dateChanged = e => {
        this.setState({ startlearningdate: e.target.value })
    }
    progressChanged = e => {
        this.setState({ inprogress: e.target.value })
    }
    handleCreateClick = e => {
        e.preventDefault();
        console.log("Click");
        // if (this.state.topic.trim() === '') {
        if (this.state.topic) {
            window.alert("Topic must contain text");
            return;
        }
        createTopic(this.state).then(response => {
            // this.props.history.push('/api/topics');
            this.props.history.push('/');

        })
    }
    render() {
        return (
            <div className="Form Appcomponent">
                <form>
                    {/* <p><label htmlFor="id">Id:</label></p>
                    <input type="text" id="id" name="topic_id" /><br /> */}

                    <p><label htmlFor="title">Title:</label></p>
                    <input type="text" id="title" name="title" value={this.state.title} onChange={this.titleChanged} /><br />

                    <p><label htmlFor="description">Description:</label></p>
                    <input type="text" id="description" name="topic_description" value={this.state.description} onChange={this.descriptionChanged} /><br />

                    {/* <p><label htmlFor="time">Time to master the topic:</label></p>
                    <input type="number" id="time" name="time_master" value={this.state.timetomaster} onChange={this.timeMasterChanged} /><br />

                    <p><label htmlFor="spent">Time spent (hours):</label></p>
                    <input type="number" id="spent" name="spent_time" value={this.state.timespent} onChange={this.timeSpentChanged} /><br /> */}

                    <p><label htmlFor="time">Time to master the topic:</label></p>
                    <input type="text" id="time" name="time_master" value={this.state.timetomaster} onChange={this.timeMasterChanged} /><br />

                    <p><label htmlFor="spent">Time spent (hours):</label></p>
                    <input type="text" id="spent" name="spent_time" value={this.state.timespent} onChange={this.timeSpentChanged} /><br />

                    <p><label htmlFor="source">Possible source:</label></p>
                    <input type="text" id="source" name="source" value={this.state.source} onChange={this.titleChanged} /><br />

                    <p><label htmlFor="date">Date when learning started:</label></p>
                    <input type="date" id="date" name="start_date" value={this.state.date} onChange={this.dateChanged} /><br />

                    <p><label htmlFor="progress">In Progress?</label></p>
                    <input type="radio" id="yes" name="progress" value="yes" /> Yes
                    <input type="radio" name="progress" value="no" /> No<br />

                    {/* <p><label htmlFor="completion">Completion Date:</label></p>
                    <input type="date" id="completion" name="completion_date" /><br /> */}

                    <div className="button">
                        {/* <input type="submit" value="Add topic" onClick={this.handleCreateClick} vai"luo()"/> */}
                        <input type="button" value="Add topic" onClick={this.handleCreateClick}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
