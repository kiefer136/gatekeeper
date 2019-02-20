import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';
import InputField from './common/InputField.jsx';

class PostForm extends Component {

    constructor(props)  {
        super(props);
        this.state = {
            title: '',
            body: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <InputField
                            name="title"
                            label="Title:"
                            value={this.state.title}
                            onChange={this.onChange}
                            placeHolder="Enter A Title"/>
                    </div>
                    <br></br>
                    <div>
                        <label>Body: </label>
                        <br></br>
                        <textarea name="body" onChange={this.onChange} value={this.state.body}></textarea>
                    </div>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);