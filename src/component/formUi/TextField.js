import React from 'react';
import TextField from '@mui/material/TextField';

const TextfieldWrapper = ({
    name,
    ...otherProps
}) => {

    const configTextfield = {

        ...otherProps,
        fullWidth: true,
        variant: 'standard'
    };



    return (
        <TextField {...configTextfield} />
    );
};

export default TextfieldWrapper;