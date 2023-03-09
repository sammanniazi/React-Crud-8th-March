import Grid from '@mui/material/Grid';

import Textfield from '../formUi/TextField'
import ButtonCustom from '../formUi/Button'
import Button from '@mui/material/Button';
import { Formik, Form } from 'formik';
import Stack from '@mui/material/Stack';

import React, { useState } from 'react';
import { styled } from "@mui/system";
import { Box } from '@mui/material';





const StyledContainer = styled("div")({
    margin: "50px auto 0",
    maxWidth: "1200px",
    textAlign: 'center',
    backgroundColor: '#f2f2f2',
    border: '5px  ',
    borderRadius: '8px',
    padding: '16px',
})

const SignUPForm = ({ formData, handleEmailChange, handleMessageChange, handleNameChange, handleSubmit, handleSubmitPost }) => {










    return (

        <StyledContainer>
            <Box >
                <Formik
                    initialValues={{
                        id: formData?.id || '',
                        title: formData?.title || '',
                        message: formData?.message || '',
                        // new field

                    }}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {({ values }) => (<Form >
                        {console.log('here values', values)}

                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                            <Grid item xs={6}>
                                <Textfield
                                    name="id"
                                    label="ID"
                                    onChange={handleNameChange}
                                    value={values.id || ''}


                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Textfield
                                    name="title"
                                    label="Title"
                                    onChange={handleEmailChange}
                                    value={values.title || ''}
                                />
                            </Grid>


                            <Grid item xs={12}>
                                <Textfield
                                    name="message"
                                    label="Message"
                                    multiline={true}
                                    value={values.message || ''}
                                    rows={2}
                                    onChange={handleMessageChange}


                                />
                            </Grid>





                        </Grid>

                        <Stack direction="row" spacing={2} style={{ marginTop: '20px' }}>
                            <ButtonCustom>
                                Submit Form
                            </ButtonCustom>

                            <Button variant="contained" color="success"
                                onClick={handleSubmitPost}>
                                Get Data
                            </Button>

                        </Stack>



                    </Form>)}



                </Formik>
            </Box>
        </StyledContainer>
    );
};

export default SignUPForm;

