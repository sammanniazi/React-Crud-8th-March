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
    name: '',
    email: '',
    address: '',
    selection: '', // new field

  }

  const [formData, setFormData] = useState(initialValues);

  const handleSubmit = (event) => {

    console.log(formData);
    alert(JSON.stringify(formData));
    // code to submit form data to backend
  };


  //name field change

  const handleNameChange = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };


  const handleAddressChange = (event) => {
    setFormData({ ...formData, address: event.target.value });
  };

  const handleSelectChange = (event) => {
    setFormData({ ...formData, selection: event.target.value });
  };



  return (

    <StyledContainer>
      <div>
        <Formik
          initialValues={{
            name: '',
            email: '',
            address: '',
            selection: '', // new field

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
                  <InputLabel htmlFor="name-input">Name</InputLabel>
                  <Field
                    component={Input}
                    value={formData.name}
                    onChange={handleNameChange}
                    placeholder="Name"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="email-input">Email</InputLabel>
                  <Field
                    component={Input}
                    value={formData.email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                  />
                </FormControl>
              </Grid>


              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="address-input">Address</InputLabel>
                  <Field
                    component={Input}
                    value={formData.address}
                    onChange={handleAddressChange}
                    placeholder="Address"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="selection-input">Age</InputLabel>

                  <NativeSelect
                    defaultValue={30}
                    name="selection"
                    value={formData.selection}
                    onChange={handleSelectChange}


                  >
                    <option value="" disabled></option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect>
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

        </Formik>
      </div>
    </StyledContainer>
  );
};

export default Getdata;
