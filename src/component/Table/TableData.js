import React from 'react';
import { Button, TableCell, TableRow } from '@mui/material';

function TableData({ data, handleDelete }) {
    return (
        <>
            {data.map(row => (
                <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.body}</TableCell>
                    <TableCell>
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(row.id)}>Delete</Button>
                    </TableCell>
                </TableRow>
            ))}
        </>
    );
}

export default TableData;