import React from 'react';
import { Field, reduxForm } from 'redux-form'

const imageField = ({input,...props}) => {
    const {value,...inputProps} = input
    return <input {...inputProps} {...props}/>
}

const FormPost = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="titleP">Title</label>
                <Field id="titleP" name="title" component="input" type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="bodyP">Body</label>
                <Field id="bodyP" name="body" component="textarea" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="short_bodyP">Short body</label>
                <Field id="short_bodyP" name="short_body" component="textarea" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="imageP">Image</label>
                <Field id="imageP" name="image" component={imageField} type="file" className="form-control"/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Save</button>
            </div>
        </form>
    );
};



export default reduxForm({
    form: 'post-create'
})(FormPost);