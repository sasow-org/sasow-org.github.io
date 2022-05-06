import {Card, FormLabel, Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";


export default function ExperimentInputCard() {

    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return <Card>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <div>
                        <TextField
                            fullWidth
                            required
                            label="Experiment Name"
                            defaultValue=""
                        />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <TextField
                            required
                            label="Repetitions"
                            defaultValue=""
                        />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <TextField
                            required
                            label="Network Size"
                            defaultValue=""
                        />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <TextField
                            required
                            label="Seed Size"
                            defaultValue=""
                        />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <TextField
                            required
                            label="Periods"
                            defaultValue=""
                        />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <TextField
                            id=""
                            label="Description"
                            multiline
                            maxRows={4}
                            value={value}
                            onChange={handleChange}
                        />
                    </div>
                </Grid>
            </Grid>

        </Box>
    </Card>
}