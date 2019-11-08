import React, { Component } from 'react'

export default class Rest extends Component {
    render() {
        return (
            <div>
                <h1>All Topics</h1>
                <ul>
                    {this.props.rest.map((topic) => {
                        const { title, description, timetomaster, timespent, source, startlearningdate, inprogress } = topic;
                        return <li key={topic.id}>{title}, {description}, {timetomaster}, {timespent}, {source}, {startlearningdate}, {inprogress}</li>
                    })
                    }
                </ul>
            </div>
        )
    }
}