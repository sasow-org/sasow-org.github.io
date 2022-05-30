import {Card, Grid, TextField} from "@mui/material";
import React, {useContext, useState} from "react";
import NetworkSelector from "../../TextField/NetworkSelector";
import {ExperimentConfigContext} from "../../../App";
import DataHandlerOptionsCard from "../DataHandlerOptionsCard/DataHandlerOptionsCard";


export default function ExperimentInputCard() {

    const experimentConfig= useContext(ExperimentConfigContext);


    const [experimentName, setExperimentName] = useState(experimentConfig.experimentName);
    const [repetitions, setRepetitions] = useState(experimentConfig.repetitions);
    const [networkSize, setNetworkSize] = useState(experimentConfig.networkSize);
    const [periods, setPeriods] = useState(experimentConfig.periods);
    const [description, setDescription] = React.useState(experimentConfig.description);

    //todo handle change experiment name
    const handleExperimentNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExperimentName(event.target.value);
        experimentConfig.experimentName = event.target.value
    };

    const handleRepetitionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Pre Repetitions: ", experimentConfig)
        setRepetitions(parseInt(event.target.value))
        experimentConfig.repetitions = parseInt(event.target.value)
        console.log("Post Repetitions: ", experimentConfig)
    };

    const handleNetworkSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNetworkSize(parseInt(event.target.value))
        experimentConfig.networkSize = parseInt(event.target.value);
    };

    const handlePeriodsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPeriods(parseInt(event.target.value))
        experimentConfig.periods = parseInt(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
        experimentConfig.description = event.target.value
    };






    return <Card sx={{
        padding:"15px"
    }}>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <DataHandlerOptionsCard/>
            </Grid>
            <Grid item xs ={12}>
                <NetworkSelector/>
            </Grid>
            <Grid item xs={12}>
                <h3>ExperimentInputConfigurator</h3>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    label="Experiment Name"
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
                    value={networkSize}
                    onChange={handleNetworkSizeChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    label="Periods"
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