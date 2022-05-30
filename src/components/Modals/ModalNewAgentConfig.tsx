
import React, {useEffect, useState} from "react";
import {Box, Button, Grid, MenuItem, Modal, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from "@mui/icons-material/Edit";
import DataGridActions from "../DataGrid/DataGridActions";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalNewAgentConfig() {

    const typesArray = ['TwitterAgent', 'FacebookAgent']
    const actionsArray = ['read', "share"];

    //const agentConfig = props.agentConfig;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [selectedAction, setSelectedAction] = useState("")

    const handleChangeSelectAction = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAction(event.target.value);
    }


    // Config Name
    const [configName, setConfigName] = useState("")
    const handleChangeConfigName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfigName(event.target.value);
    }

    // Followers Percentage
    const [followersPercentage, setFollowersPercentage] = useState(0);
    const handleChangeFollowersPercentage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFollowersPercentage(parseFloat(event.target.value))
    }

    // Followings Percentage
    const [followingsPercentage, setFollowingsPercentage] = useState(0);
    const handleChangeFollowingsPercentage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFollowingsPercentage(parseFloat(event.target.value))
    }

    // Agent Type, remember this is for select the class was need to instantiate.
    const [selectedAgentType, setSelectedAgentType] = useState("TwitterAgent")//todo check this hardcoding
    const handleChangeSelectAgentType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAgentType(event.target.value)
    }

    function getAction() {
        //todo check this other hardcoding ....

        if(selectedAction === "read"){
            return {name: "", probability: 0, type: "ActionRead"}
        }else{
            return {name: "", probability: 0, type: "ActionShare"}
        }

    }

    const actionsList = []

    const onClickAddAction = () => {
        actionsList.push(getAction());
    }

    return (
        <div>
            <Button onClick={handleOpen}>
                <EditIcon/>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <h1>Agent Configurator</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Config Name"
                                value={configName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Followers Percentage"
                                value={followersPercentage}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Followings Percentage"
                                value={followingsPercentage}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-select-currency"
                                select
                                label="Agent Type"
                                value={selectedAgentType}
                                onChange={handleChangeSelectAgentType}
                            >
                                {typesArray.map((option, i) => (
                                    <MenuItem key={i} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                select
                                label="Action"
                                value={selectedAgentType}
                                onChange={handleChangeSelectAgentType}
                            >
                                {actionsArray.map((option, i) => (
                                    <MenuItem key={i} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={onClickAddAction} variant="outlined">
                                <AddIcon/>
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained">
                                Add New Config
                                <AddIcon/>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}