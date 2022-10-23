import * as React from 'react';
import {DataGrid, GridRowsProp, GridColDef, GridToolbar} from '@mui/x-data-grid';
import {fetchAllUnits} from "./api/DataFetching.mjs";
import {DataGridPremium} from "@mui/x-data-grid-premium";

const columns = [
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'id', headerName: 'index', width: 150 },
    { field: 'applicationsOpen', headerName: 'applications open', width: 150 },
];

export default function MainDataGrid(props) {
    console.log(props.data)

    let rows = []

    let index = 0
    for(let elem in props.data) {
        let propertyInfo = props.data[elem].info.info
        propertyInfo.id = index
        console.log(props.data[elem].info.info)
        rows.push(propertyInfo)
        index++
    }


    return (

        <div style={{ height: "80vh", width: '90%', marginLeft: "auto", marginRight: "auto", marginTop: "2.5vh" }}>
            <DataGridPremium rows={rows} columns={columns}  components={{ Toolbar: GridToolbar }}/>
            <h1>ds</h1>
        </div>
    );
}
