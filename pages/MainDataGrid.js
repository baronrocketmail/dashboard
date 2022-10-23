import * as React from 'react';
import {DataGrid, GridRowsProp, GridColDef, GridToolbar} from '@mui/x-data-grid';
import {fetchAllUnits} from "./api/DataFetching.mjs";
import {DataGridPremium} from "@mui/x-data-grid-premium";

const columns = [
    { field: 'name', headerName: 'Name', width: 250, editable: true },
    { field: 'id', headerName: 'index', width: 150, editable: true },
    { field: 'applicationsOpen', headerName: 'applications open', width: 150, editable: true },
];

export default function MainDataGrid(props) {
    console.log(props.data)

    let rows = []

    let index = 0
    for(let elem in props.data) {
        let propertyInfo = props.data[elem].info.info
        propertyInfo.id = index
        propertyInfo.editable = true
        console.log(props.data[elem].info.info)
        rows.push(propertyInfo)
        index++
    }


    return (
        <div>

        <div style={{  backgroundColor: "white", height: "100vh", width: '100%', marginLeft: "auto", marginRight: "auto", marginTop: "auto", marginBottom: "auto" }}>
            <DataGridPremium getDetailPanelContent={Head} rowReordering disableSelectionOnClick checkboxSelection rows={rows} columns={columns}  components={{ Toolbar: GridToolbar  }}/>
        </div>

        </div>
    );
}

function Head(){
    return(
        <h1>huil</h1>
    )
}
