import {
  Card,
  Grid,
} from '@mui/material';
import AgentConfigsTable from '../../Table/AgentConfigsTable';
import ModalNewAgentConfig from '../../Modals/ModalNewAgentConfig';

export default function ConfigurationCard(props) {
  console.log(props.experimentConfig);

  return (
    <Card style={{
      padding: '15px',
    }}
    >
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <h1>Configuration Card</h1>
        </Grid>
        <Grid alignContent="center" item xs={4}>
          <ModalNewAgentConfig experimentConfig={props.experimentConfig} />
        </Grid>
        <Grid item xs={12}>
          <AgentConfigsTable experimentConfig={props.experimentConfig} />
        </Grid>

      </Grid>
    </Card>
  );
}
