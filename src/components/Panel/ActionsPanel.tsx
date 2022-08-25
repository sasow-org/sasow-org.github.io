import {Button, Grid, MenuItem, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DataGridActions from "../DataGrid/DataGridActions";
import * as React from "react";
import {useState} from "react";

export default function ActionsPanel(agentConfig){
    //console.log("Agent Config on actions panel: ", agentConfig);

    const actionsArray = ['read', "share"];
    const [selectedAction, setSelectedAction] = useState("read")

    const handleChangeSelectAction = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAction(event.target.value);
    }

    function getAction() {
        //todo check this other hardcoding ....

        if(selectedAction === "read"){
            return {name: "read", probability: 0, type: "ActionRead"}
        }else{
            return {name: "share", probability: 0, type: "ActionShare"}
        }

    }

    const onClickAddAction = () => {
        console.log("agentConfig.actions pre-redefine --> : ", agentConfig.actions)
        agentConfig.actions.push(getAction());
        console.log("agentConfig.actions post-redefine --> : ", agentConfig.actions)
    }

    return(
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    select
                    label="Action"
                    value={selectedAction}
                    onChange={handleChangeSelectAction}
                >
                    {actionsArray.map((option, i) => (
                        <MenuItem key={i} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={6}>
                <Button onClick={onClickAddAction} variant="contained">
                    <AddIcon/>
                </Button>
            </Grid>
            <Grid item xs={12}>
                <DataGridActions {...agentConfig}/>
            </Grid>
        </Grid>
    );
}