import {useContext, useEffect, useState} from "react";
import {ExperimentConfigContext} from "../../App";
import {DataGrid, GridColDef, useGridApiRef} from "@mui/x-data-grid";
import * as React from "react";
import {Button, Switch} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


export const getRows = (agentConfig) => {
    const getRow = (action, index) => {
        return {
            id: index,
            actionName: action.name,
            actionProbability: action.probability,
            actionType: action.type
        }
    };

    let aux = []
    let index = 0
    agentConfig.actions.forEach((action) => {
        aux.push(getRow(action, index));
        index+=1;
    })

    return aux;
}




export default function DataGridActions(agentConfig){

    console.log("On Data Grid Actions : ", agentConfig)

    const columns: GridColDef[] = [
        {
            field: 'actionName',
            headerName: 'Action Name',
            width: 150,
        },
        {
            field: 'actionProbability',
            headerName: 'Action Probability (%)',
            width: 170,
            editable: true
        },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 80,
            renderCell: (cellParam) => {
                //console.log("CellParam --> ", cellParam.row.id);

                const handleDelete = (event) => {
                    console.log("OnHandle Delete")
                    console.log("Event: ", event)
                }

                return (
                    <Button onClick={handleDelete}>
                        <DeleteIcon/>
                    </Button>
                );
            },
        },
    ];

    const [rows, setRows] = useState([]);

    useEffect(() => {
        console.log(agentConfig.actions)
        if(agentConfig.actions !== []){
            setRows(getRows(agentConfig));
        }
    },[])
    //setRows(getRows(agentConfig))
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}