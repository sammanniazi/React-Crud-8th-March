
import React, { useState } from 'react';

import CreatePostForm from '../../component/Pages/form'





const SignUPForm = () => {


    const initialValues = {
        id: '',
        title: '',
        message: '',
    }

    const [formData, setFormData] = useState(initialValues);



    const handleSubmit = (event) => {

        console.log(formData);

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert("post succefully");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    const handleSubmitPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                setFormData({
                    id: data.id,
                    title: data.title,
                    message: data.body
                });
                console.log('here data', data.body)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };






    const handleNameChange = (event) => {
        setFormData({ ...formData, id: event.target.value });
    };

    const handleEmailChange = (event) => {
        setFormData({ ...formData, title: event.target.value });
    };



    const handleMessageChange = (event) => {
        setFormData({ ...formData, message: event.target.value });
    };


    return (

        <CreatePostForm formData={formData} handleEmailChange={handleEmailChange} handleMessageChange={handleMessageChange} handleNameChange={handleNameChange} handleSubmitPost={handleSubmitPost} handleSubmit={handleSubmit} />
    );
};

export default SignUPForm;

