import * as React from 'react';
import ExperimentsOptionsCard from "./Cards/ExperimentsOptionsCard/ExperimentsOptionsCard";
import ExperimentInputCard from "./Cards/ExperimentInputCard/ExperimentInputCard";
import ConfigurationCard from "./Cards/ConfigurationCard/ConfigurationCard";
import {Grid} from "@mui/material";
import DataHandlerOptionsCard from "./Cards/DataHandlerOptionsCard/DataHandlerOptionsCard";
import OutputIterationsCard from "./Cards/OutputIterationsCard/OutputIterationsCard";
import Box from "@mui/material/Box";
import {useContext, useState} from "react";
import {ExperimentConfigContext} from "../App";

export default function TemplateLayout(){

    //const experimentConfig= useContext(ExperimentConfigContext);

    return (
        <Box mt={2} paddingX={"15px"} maxHeight={1000} height={1000} style={{backgroundColor: "darkgray",
        }}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <ExperimentInputCard/>
                </Grid>
                <Grid item xs={8}>
                    <ConfigurationCard/>
                </Grid>
                <Grid item xs={12}>
                    <DataHandlerOptionsCard/>
                </Grid>
                <Grid item xs={12}>
                    <OutputIterationsCard />
                </Grid>
            </Grid>
        </Box>
    )
}