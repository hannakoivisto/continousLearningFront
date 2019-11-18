import React, { Component } from 'react'

export default class Form extends Component {
    state = { title: '', description: '', timetomaster: '', timespent: '', source: '', startlearningdate: '', inprogress: '' };
    oneChanged = e => {
        // this.setState({})
        console.dir(e.target);
        this.setState({ [e.target.name]: e.target.value })
    }
    timeMasterChanged = e => {
        // this.setState({})
        console.dir(e.target);
        this.setState({ timetomaster: e.target.value })
    }
    handleCreateClick = e => {
        e.preventDefault();
        console.log("Click");
        return;
    }
    render() {
        return (
            <form>
                <p><label htmlFor="id">Id:</label></p>
                <input type="text" id="id" name="topic_id" /><br />
                {/* id kuntoon */}
                <p><label htmlFor="title">Title:</label></p>
                <input type="text" value={this.state.title} id="title" name="title" onChange={this.oneChanged} /><br />

                {/* <p><label htmlFor="description">Description:</label></p>
                <textarea id="description" name="topic_description"></textarea><br /> */}

                <p><label htmlFor="description">Description:</label></p>
                <input type="text" value={this.state.title} id="description" name="topic_description" onChange={this.oneChanged} /><br />

                <p><label htmlFor="time">Time to master the topic:</label></p>
                <input type="number" id="time" name="time_master" onChange={this.timeMasterChanged} /><br />

                <p><label htmlFor="spent">Time spent (hours):</label></p>
                <input type="number" id="spent" name="spent_time" /><br />

                <p><label htmlFor="source">Possible source:</label></p>
                <input type="text" id="source" name="source" onChange={this.oneChanged} /><br />

                <p><label htmlFor="date">Date when learning started:</label></p>
                <input type="date" id="date" name="start_date" /><br />

                <p><label htmlFor="progress">In Progress?</label></p>
                <input type="radio" id="yes" name="progress" value="yes" /> Yes
                <input type="radio" name="progress" value="no" /> No<br />

                <p><label htmlFor="completion">Completion Date:</label></p>
                <input type="date" id="completion" name="completion_date" /><br />

                <div className="button">
                    {/* <input type="submit" value="Add topic" onClick={this.handleCreateClick} vai"luo()"/> */}
                    <input type="button" value="Add topic" onClick={this.handleCreateClick}
                    />
                </div>

            </form>
        )
    }
}
