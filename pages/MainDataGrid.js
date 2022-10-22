import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {fetchAllUnits} from "./api/DataFetching.mjs";


const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'id', headerName: 'index', width: 150 },
    { field: 'applicationsOpen', headerName: 'applications open', width: 150 },
];

export default function MainDataGrid(props) {
    let rows = []

    let index = 0

    for(let key in props.data){
        let infoCollection = JSON.parse(props.data[key]).info
        let info = JSON.parse(infoCollection).info
        console.log(info)

        rows.push({id: index, name: key, applicationsOpen: info.applicationsOpen})
        index++;
    }
    return (
        <div style={{ height: "80vh", width: '75%', marginLeft: "auto", marginRight: "auto", marginTop: "2.5vh" }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
}
