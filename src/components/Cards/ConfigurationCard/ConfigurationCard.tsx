import {
    Button,
    Card,
    Grid,
} from "@mui/material";
import AgentConfigsTable from "../../Table/AgentConfigsTable";

export default function ConfigurationCard(props) {

    console.log(props.experimentConfig)

    return <Card style={{
        padding:"15px",
    }} >
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <h1>Configuration Card</h1>
            </Grid>
            <Grid item xs={12}>
                <AgentConfigsTable experimentConfig={props.experimentConfig} />
            </Grid>
            <Grid item xs={6}>
                <Button fullWidth variant="outlined">
                    Add Agent
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button fullWidth color={"error"} variant="contained" >
                    Delete Agent
                </Button>
            </Grid>
        </Grid>
    </Card>
}