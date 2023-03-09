import React, { useState, useEffect } from 'react';
import { TableContainer, Table, TableBody, Paper } from '@mui/material';
import TableHeader from '../../component/Table/Tableheader';
import TableData from '../../component/Table/TableData';

function MyTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    const handleDelete = (id) => {
        setData(prevData => prevData.filter(row => row.id !== id));
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    <TableHeader />
                    <TableData data={data} handleDelete={handleDelete} />
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MyTable;