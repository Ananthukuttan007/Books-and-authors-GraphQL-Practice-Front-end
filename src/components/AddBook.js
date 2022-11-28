import React, { Component } from 'react'
import { graphql } from '@apollo/client/react/hoc';
import { flowRight as compose } from 'lodash'
import { ADD_BOOKS, GET_AUTHORS, GET_BOOKS } from '../queries/queries';


class AddBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            genre: "",
            authorid: "",
        }
    }

    displayAuthors() {
        var data = this.props.GET_AUTHORS;
        console.log(data)
        if (data.loading) {
            return (<option disabled>Loading authors</option>);
        } else {
            return data.authors.map(author => {
                return (<option key={author.id} value={author.id}>{author.name}</option>);
            });
        }
    }
    render() {
        return (
            <form id="add-book">
                <div className="field">
                    <label>Book name:</label>
                    <input value={this.state.name} type="text" onChange={(e) => {
                        this.setState({ name: e.target.value })
                    }} />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input value={this.state.genre} type="text" onChange={(e) => {
                        this.setState({ genre: e.target.value })
                    }} />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select value={this.state.authorid} onChange={(e) => {
                        this.setState({ authorid: e.target.value })
                    }}>
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button onClick={(e) => {
                    e.preventDefault()
                    this.props.ADD_BOOKS({
                        variables: {
                            name: this.state.name,
                            genre: this.state.genre,
                            authorid: this.state.authorid
                        },
                        refetchQueries: [{ query: GET_BOOKS }]
                    })
                    this.setState({
                        name: "",
                        genre: "",
                        authorid: "",
                    })
                }}>+</button>

            </form>
        );
    }
}


// export default
//     graphql(ADD_BOOKS, { name: "ADD_BOOKS" })(AddBook);

export default compose(
    graphql(ADD_BOOKS, { name: "ADD_BOOKS" }),
    graphql(GET_AUTHORS, { name: "GET_AUTHORS" })
)(AddBook);