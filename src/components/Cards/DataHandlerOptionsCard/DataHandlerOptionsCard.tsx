import {Button, Card, FormControlLabel, Grid, Switch} from "@mui/material";
import React from "react";


export default function DataHandlerOptionsCard() {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };


    return <Card>
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <h3>
                    Essential Data
                </h3>
                <FormControlLabel control={<Switch checked={true} />} label="Label" />
            </Grid>
            <Grid item xs={6}>
                <h3>
                    Detailed Data
                </h3>
                <FormControlLabel control={<Switch defaultChecked={false}  />} label="Label" />
            </Grid>
        </Grid>
    </Card>
}