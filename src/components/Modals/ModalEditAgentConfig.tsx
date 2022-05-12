import React, { useState } from 'react';
import {
  Box, Button, Grid, MenuItem, Modal, TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ActionConfigsTable from '../Table/ActionConfigsTable';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalEditAgentConfig(props) {
  const typesArray = ['TwitterAgent', 'FacebookAgent'];
  const actionsArray = ['read', 'share'];

  const { agentConfig } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(agentConfig.agentType);

  const [selectedAction, setSelectedAction] = useState('');

  const handleChangeSelectAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAction(event.target.value);
  };

  // Config Name
  const [configName, setConfigName] = useState(agentConfig.configName);
  const handleChangeConfigName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfigName(event.target.value);
  };

  // Followers Percentage
  const [followersPercentage, setFollowersPercentage] = useState(agentConfig.percentageFollowers);
  const handleChangeFollowersPercentage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFollowersPercentage(parseFloat(event.target.value));
  };

  // Followings Percentage
  const [followingsPercentage, setFollowingsPercentage] = useState(agentConfig.percentageFollowers);
  const handleChangeFollowingsPercentage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFollowingsPercentage(parseFloat(event.target.value));
  };

  // Agent Type, remember this is for select the class was need to instantiate.
  const [selectedAgentType, setSelectedAgentType] = useState(agentConfig.agentType);
  const handleChangeSelectAgentType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAgentType(event.target.value);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <EditIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <h1>Agent Configurator</h1>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Config Name"
                value={agentConfig.configName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Followers Percentage"
                value={agentConfig.percentageFollowers}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Followings Percentage"
                value={agentConfig.percentageFollowings}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Agent Type"
                value={selectedAgentType}
                onChange={handleChangeSelectAgentType}
              >
                {typesArray.map((option, i) => (
                  <MenuItem key={i} value={option}>
                      {option}
                    </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                select
                label="Action"
                value={selectedAgentType}
                onChange={handleChangeSelectAgentType}
              >
                {actionsArray.map((option, i) => (
                  <MenuItem key={i} value={option}>
                      {option}
                    </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Button>
                <AddIcon />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <ActionConfigsTable actions={agentConfig.actions} />
            </Grid>
            <Grid item xs={12} />
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
