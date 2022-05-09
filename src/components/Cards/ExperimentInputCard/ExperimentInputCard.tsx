import {Card, FormLabel, Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import React, {useState} from "react";
import Typography from "@mui/material/Typography";


export default function ExperimentInputCard(props) {

    const [experimentConfig, setExperimentConfig] = useState(props.experimentConfig);


    const [experimentName, setExperimentName] = useState(experimentConfig.experimentName);
    const [repetitions, setRepetitions] = useState(experimentConfig.repetitions);
    const [networkSize, setNetworkSize] = useState(experimentConfig.networkSize);
    const [seedSize, setSeedSize] = useState(experimentConfig.seedSize);
    const [periods, setPeriods] = useState(experimentConfig.periods);
    const [description, setDescription] = React.useState(experimentConfig.description);

    //todo handle change experiment name
    const handleExperimentNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Experiment config pre: ", experimentConfig)
        setExperimentName(event.target.value);
        props.experimentConfig.experimentName = event.target.value
        console.log("experimentConfig es: ",  experimentConfig)
    };

    const handleRepetitionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRepetitions(parseInt(event.target.value))
        props.experimentConfig.repetitions = parseInt(event.target.value)
    };

    const handleNetworkSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNetworkSize(parseInt(event.target.value))
        props.experimentConfig.networkSize = parseInt(event.target.value);
    };

    const handleSeedSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeedSize(parseInt(event.target.value))
        props.experimentConfig.seedSize = parseInt(event.target.value);
    };

    const handlePeriodsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPeriods(parseInt(event.target.value))
        props.experimentConfig.periods = parseInt(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
        props.experimentConfig.description = event.target.value
    };






    return <Card sx={{
        padding:"15px"
    }}>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <h1>ExperimentInputConfigurator</h1>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    label="Experiment Name"
                    defaultValue=""
                    value={experimentName}
                    onChange={handleExperimentNameChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    label="Repetitions"
                    value={repetitions}
                    onChange={handleRepetitionsChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    label="Network Size"
                    defaultValue=""
                    value={networkSize}
                    onChange={handleNetworkSizeChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    label="Seed Size"
                    defaultValue=""
                    value={seedSize}
                    onChange={handleSeedSizeChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    label="Periods"
                    defaultValue=""
                    value={periods}
                    onChange={handlePeriodsChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id=""
                    label="Description"
                    multiline
                    maxRows={4}
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </Grid>
        </Grid>
    </Card>
}