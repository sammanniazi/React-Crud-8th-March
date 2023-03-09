import React from 'react';
import { TableCell, TableRow } from '@mui/material';

function TableHeader() {
    return (
        <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
            <TableCell></TableCell>
        </TableRow>
    );
}

export default TableHeader;