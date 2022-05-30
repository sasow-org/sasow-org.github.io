import {
    Card,
    Grid,
} from "@mui/material";
import ModalNewAgentConfig from "../../Modals/ModalNewAgentConfig";
import DataGridAgent from "../../DataGrid/DataGridAgents";

export default function ConfigurationCard() {
    return <Card style={{
        padding:"15px",
    }} >
        <Grid container spacing={1}>
            <Grid item xs={8}>
                <h1>Configuration Card</h1>
            </Grid>
            <Grid alignContent="center" item xs={4}>
                <ModalNewAgentConfig />
            </Grid>
            <Grid item xs={12}>
                <DataGridAgent />
            </Grid>

        </Grid>
    </Card>
}