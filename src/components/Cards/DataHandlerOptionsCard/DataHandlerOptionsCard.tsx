import { Card, FormControlLabel, Grid, Switch} from "@mui/material";
import React, {useContext} from "react";
import {ExperimentConfigContext} from "../../../App";

export default function DataHandlerOptionsCard() {

    const experimentConfig= useContext(ExperimentConfigContext);

    const [checkedEssential, setCheckedEssential] = React.useState(experimentConfig.essentialData);

    const [checkedDetailed, setCheckedDetailed] = React.useState(experimentConfig.detailedData)

    const handleDetailedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedDetailed(event.target.checked);
        experimentConfig.detailedData = event.target.checked;
    };


    return <Card>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <h1>DataHandlerConfigurator</h1>
            </Grid>
            <Grid item xs={6}>
                <h3>
                    Essential Data
                </h3>
                <FormControlLabel control={<Switch checked={checkedEssential} />} label="Label" />
            </Grid>
            <Grid item xs={6}>
                <h3>
                    Detailed Data
                </h3>
                <FormControlLabel control={<Switch checked={checkedDetailed}  onChange={handleDetailedChange}/>} label="Label" />
            </Grid>
        </Grid>
    </Card>
}