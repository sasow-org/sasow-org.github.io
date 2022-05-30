import React, {useContext, useState} from "react";
import {Box, Button, Container, Grid, MenuItem, Modal, TextField} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from '@mui/icons-material/Add';
import {ExperimentConfigContext} from "../../App";
import DataGridActions from "../DataGrid/DataGridActions";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalEditAgentConfig(agentConfig) {

    //console.log("on modal: ", agentConfig)

    const typesArray = ['TwitterAgent', 'FacebookAgent']
    const actionsArray = ['read', "share"];

    //const experimentConfig = useContext(ExperimentConfigContext)
    //console.log("Agent Config Post Index ---> ", experimentConfig.agentsConfigs)
    //console.log("Experiment Config Post Index ---> ", experimentConfig)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangeSelectAgentType = (event: React.ChangeEvent<HTMLInputElement>) => {
        agentConfig.agentType = event.target.value;
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
                                value={agentConfig.configName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Followers Percentage"
                                value={agentConfig.percentageFollowers}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Followings Percentage"
                                value={agentConfig.percentageFollowings}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-select-currency"
                                select
                                label="Agent Type"
                                value={agentConfig.agentType}
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
                            <Button>
                                <AddIcon/>
                            </Button>
                        </Grid>
                        <Grid item xs={12}>

                        </Grid>
                        <Grid item xs={12}>
                            <DataGridActions {...agentConfig}/>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}