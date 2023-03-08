import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from "@mui/material";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { styled } from "@mui/system";
import MenuItem from '@mui/material/MenuItem';
//import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const StyledContainer = styled("div")({
  margin: "50px auto 0",
  maxWidth: "1200px",
  textAlign: 'center',
  backgroundColor: '#f2f2f2',
  border: '5px  ',
  borderRadius: '8px',
  padding: '16px',
})

const Getdata = () => {


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
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };




  //name field change

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

    <StyledContainer>
      <div>
        <Formik
          initialValues={{
            id: '',
            title: '',
            message: '',
            // new field

          }}
          onSubmit={handleSubmit}
        // onChange={handleFormChange}
        >

          <Form >
            {console.log('here errors')}

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="name-input">ID</InputLabel>
                  <Field
                    component={Input}
                    value={formData.name}
                    onChange={handleNameChange}
                    placeholder="ID"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="email-input">Title</InputLabel>
                  <Field
                    component={Input}
                    value={formData.email}
                    onChange={handleEmailChange}
                    placeholder="Title"
                  />
                </FormControl>
              </Grid>


              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="description-input">Description</InputLabel>
                  <Field
                    component={TextareaAutosize}
                    value={formData.message}
                    onChange={handleMessageChange}

                    id="message-textarea"
                    minRows={3}
                  />
                </FormControl>
              </Grid>


            </Grid>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginTop: '16px' }}
            >
              Submit
            </Button>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmitPost}
              sx={{ marginTop: '16px' }}
            >
              Get Post
            </Button>
          </Form>

        </Formik>
      </div>
    </StyledContainer>
  );
};

export default Getdata;
