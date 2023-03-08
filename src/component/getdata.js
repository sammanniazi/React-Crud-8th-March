import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from "@mui/material";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';

const Getdata = () => {


  const initialValues = {
    name: '',
    email: '',
    address: '',
    contact: '',
  }

  const [formData, setFormData] = useState(initialValues);
  const handleSubmit = (values) => {


    alert(JSON.stringify(values));
  };

  const handleFormChange = (event) => {


    console.log('test', event?.nativeEvent);
    console.log('test', event?.nativeEvent.target.value);

    const { name, value } = event.target;

    const data = { ...initialValues };

    data.name = event?.nativeEvent.target.value;
    setFormData(data);
  };

  console.log(formData, 'new');
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          address: '',
          contact: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form onChange={handleFormChange}>
            {console.log('here errors')}

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="name-input">Name</InputLabel>
                  <Field
                    component={Input}
                    name="name"
                    id="name-input"
                    placeholder="Name"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="email-input">Email</InputLabel>
                  <Field
                    component={Input}
                    name="email"
                    id="email-input"
                    placeholder="Email"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="address-input">Address</InputLabel>
                  <Field
                    component={Input}
                    name="address"
                    id="address-input"
                    placeholder="Address"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="contact-input">Contact</InputLabel>
                  <Field
                    component={Input}
                    name="contact"
                    id="contact-input"
                    placeholder="Contact"
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Getdata;
