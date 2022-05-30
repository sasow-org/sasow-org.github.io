import {useContext} from "react";
import {ExperimentConfigContext} from "../../App";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import * as React from "react";
import {Button, Switch} from "@mui/material";
import ModalEditAgentConfig from "../Modals/ModalEditAgentConfig";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DataGridActions(agentConfig){

    console.log("On Data Grid Actions : ", agentConfig)

    //let agentConfig = props.agentConfig;



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
                return (
                    <Button>
                        <DeleteIcon/>
                    </Button>
                );
            },
        },
    ];


    const getRows = () => {
        const getRow = (action, index) => {
            return {
                id: index,
                actionName: action.name,
                actionProbability: action.probability
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

    const rows = getRows();

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