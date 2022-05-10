import {
    Button,
    Paper, Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, {useState} from "react";
import ModalEditAgentConfig from "../Modals/ModalEditAgentConfig";

export default function AgentConfigsTable(props) {

    const agentsConfig = props.experimentConfig.agentsConfigs;

    let states = [];
    agentsConfig.map(ag => {
        states.push(ag.isSeed)
    })
    const [checkedSeedList, setCheckedSeedList] = useState(states);

    console.log(agentsConfig)

    const handleSeedAgent = (event: React.ChangeEvent<HTMLInputElement>, index) => {
        //console.log("event.target.checked: ",event.target.checked)
        //console.log("pre sett: ",props.experimentConfig.agentsConfigs[index].isSeed, " index: ", index)
        //console.log("states pre set: ", states)

        props.experimentConfig.agentsConfigs[index].isSeed = event.target.checked;
        const statesCopy = []
        states.map(state => {
            statesCopy.push(state)
        })
        statesCopy[index] = event.target.checked;
        setCheckedSeedList(statesCopy)
        //console.log("post sett: ",props.experimentConfig.agentsConfigs[index].isSeed, " index: ", index)

    }

    return (
        <Table>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Config Name</TableCell>
                            <TableCell >Percentage Agent</TableCell>
                            <TableCell >isSeed</TableCell>
                            <TableCell> Edit </TableCell>
                            <TableCell >Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {agentsConfig.map((agentConfig, i) => (
                            <TableRow
                                key={agentConfig.configName}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {agentConfig.configName}
                                </TableCell>
                                <TableCell >{agentConfig.quantityAgent}</TableCell>
                                <TableCell>
                                    <Switch checked={checkedSeedList[i]}  onChange={(e) => handleSeedAgent(e,i)}/>
                                </TableCell>
                                <TableCell >
                                    <ModalEditAgentConfig agentConfig={agentConfig}/>
                                </TableCell>
                                <TableCell >
                                    <Button>
                                        <DeleteIcon/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Table>
    );
}