import React, {useState} from "react";
import {Button, Modal} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import BoxAgentConfigTabs from "../Buttons/BoxAgentConfigTabs";

export default function ModalNewAgentConfig() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const agentConfig = {
        initialState: 0,
        configName: "",
        percentageFollowers: 0,
        percentageFollowings: 0,
        agentType: "",
        actions: [],
        isSeed: false,
        percentageAgent: 0
    }

    console.log("Agent Config on New Agent Config modal: ", agentConfig)

    return (
        <div>
            <Button onClick={handleOpen} variant={"contained"}>
                <AddIcon/>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-agent-config-menu-title"
                aria-describedby="modal-agent-config-menu-description"
            >
                <BoxAgentConfigTabs {...agentConfig} />
            </Modal>
        </div>
    );
}