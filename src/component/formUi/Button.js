import React from 'react';
import { Button } from "@mui/material";


const ButtonWrapper = ({
    children,
    ...otherProps
}) => {



    const configButton = {





        variant: 'contained',
        color: 'primary',

        type: 'submit'

    }

    return (
        <Button
            {...configButton}
        >
            {children}
        </Button>
    );
};

export default ButtonWrapper;