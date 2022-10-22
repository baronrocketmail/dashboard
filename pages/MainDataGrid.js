import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {fetchAllUnits} from "./api/DataFetching.mjs";


const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
];

export default function MainDataGrid() {
    return (
        <div style={{ height: "80vh", width: '75%', marginLeft: "auto", marginRight: "auto", marginTop: "2.5vh" }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
}
