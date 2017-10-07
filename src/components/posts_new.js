/**
 * Created by mostafazahran on 10/3/17.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { CreatePost } from '../actions';
import { connect } from 'react-redux';

class PostsNew extends Component {
    renderField (field) {
        const { meta: { touched, error } } = field;
        const className = `from-group ${touched && error ? 'has-danger': ''}`;
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input type="text" className="form-control" { ...field.input }/>
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit = (values) => {
        this.props.CreatePost(values, () => {
            this.props.history.push('/');
        });
    };

    render (){
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field label="Title For Post" name="title" component={this.renderField}/>
                <Field label="Categories" name="categories" component={this.renderField}/>
                <Field label="Post Content" name="content" component={this.renderField}/>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger"> Cancel </Link>
            </form>
        )
    }
}

function validate (values) {
    const errors = {};
    if(!values.title){
        errors.title = 'Enter a title!';
    }
    if(values.title && values.title.length < 3){
        errors.title = 'Title must be at least 3 characters!';
    }
    if(!values.categories){
        errors.categories = 'Enter a Category!';
    }
    if(!values.content){
        errors.content = 'Enter a Content!';
    }
    return errors;
}
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(connect(null, { CreatePost })(PostsNew));