import {Button, Card, FormControlLabel, Grid, Switch} from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";


export default function DataHandlerOptionsCard(props) {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //console.log("OnHandleChange antes de setCheked: ",experimentConfig)
        setChecked(event.target.checked);
        props.experimentConfig.detailedData = event.target.checked;
        //console.log("OnHandleChange despues de setCheked: ",experimentConfig)
    };

    const experimentConfig = props.experimentConfig

    return <Card>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <h1>DataHandlerConfigurator</h1>
            </Grid>
            <Grid item xs={6}>
                <h3>
                    Essential Data
                </h3>
                <FormControlLabel control={<Switch checked={experimentConfig.essentialData} />} label="Label" />
            </Grid>
            <Grid item xs={6}>
                <h3>
                    Detailed Data
                </h3>
                <FormControlLabel control={<Switch checked={experimentConfig.detailedData}  onChange={handleChange}/>} label="Label" />
            </Grid>
        </Grid>
    </Card>
}