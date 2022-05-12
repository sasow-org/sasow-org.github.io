import {
  Card, FormControlLabel, Grid, Switch,
} from '@mui/material';
import React from 'react';

export default function DataHandlerOptionsCard(props) {
  const [checkedEssential, setCheckedEssential] = React.useState(props.experimentConfig.essentialData);

  const [checkedDetailed, setCheckedDetailed] = React.useState(props.experimentConfig.detailedData);

  const handleDetailedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("OnHandleChange antes de setCheked: ",experimentConfig)
    setCheckedDetailed(event.target.checked);
    props.experimentConfig.detailedData = event.target.checked;
    // console.log("OnHandleChange despues de setCheked: ",experimentConfig)
  };

  return (
    <Card>
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
          <FormControlLabel control={<Switch checked={checkedDetailed} onChange={handleDetailedChange} />} label="Label" />
        </Grid>
      </Grid>
    </Card>
  );
}
