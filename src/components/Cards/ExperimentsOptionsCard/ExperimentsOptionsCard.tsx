import * as React from 'react';
import { Button, Card, Grid } from '@mui/material';

export default function ExperimentsOptionsCard() {
  return (
    <Card>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Button>
            New Experiment
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button>
            Load Experiment
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button>
            Save Experiment
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
