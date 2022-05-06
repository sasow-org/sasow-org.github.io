import {DataHandlerConfig} from "../model/util/config/DataHandlerConfig";
import {ExperimentTwitter} from "../model/environments/twitter/ExperimentTwitter";
import {Button} from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import React from "react";
import {Action} from "../model/util/actions/Action";
import {ActionShare} from "../model/util/actions/commands/ActionShare";
import {ActionRead} from "../model/util/actions/commands/ActionRead";
import {AgentConfig} from "../model/util/config/AgentConfig";
import {Agent} from "../model/essential/Agent";
import {SimulationConfig} from "../model/util/config/SimulationConfig";

//agenttype deberia hacer referencia a la clase del objeto que debemos instanciar
const agentConfig1 = {
    initialState: 0,
    configName: "agent1",
    followersQuantity: 0.03,
    followingsQuantity: 0,
    agentType: "twitterAgent",
    actions: [
        {
            name: "read",
            probability: 0.5,
            type: "ActionRead" //aqui se hace referencia a la clase del objeto action que se debera instanciar
        },
        {
            name: "share",
            probability: 0.03,
            type: "ActionShare" //aqui se hace referencia a la clase del objeto action que se debera instanciar}
        },
    ]
    ,
    isSeed: false,
    quantityAgent: 950
}

const agentConfig2 = {
    initialState: 1,
    configName: "agent2",
    followersQuantity: 0.019,
    followingsQuantity: 0,
    agentType: "twitterAgent",
    actions: [
        {
            name: "read",
            probability: 0.5,
            type: "ActionRead" //aqui se hace referencia a la clase del objeto action que se debera instanciar
        },
        {
            name: "share",
            probability: 0.05,
            type: "ActionShare" //aqui se hace referencia a la clase del objeto action que se debera instanciar}
        },
    ],
    isSeed: true,
    quantityAgent: 50
}

const experimentConfig = {
    experimentName: "123",
    repetitions: 1,
    networkSize: 1000,
    seedSize: 50,
    periods: 20,
    description: "true",
    agentsConfigs: [
        agentConfig1,agentConfig2
    ],
    essentialData: true,
    detailedData: true,
    experimentType: "TwitterExperiment"//referencia a la clase que se deberia instanciar
};

export default function StartButton() {
    const repetitions : number = experimentConfig.repetitions;
    const name: string = experimentConfig.experimentName
    const description: string = experimentConfig.description
    const dataHandlerConfig: DataHandlerConfig = new DataHandlerConfig(name, experimentConfig.essentialData, experimentConfig.detailedData);

    const startExperiment = async () =>  {
        let experimentTwitter : ExperimentTwitter = new ExperimentTwitter(repetitions, name, description, dataHandlerConfig,
            () => {
                const networkSize : number = experimentConfig.networkSize;
                const seedSize: number = experimentConfig.seedSize;
                const periods : number = experimentConfig.periods;

                let commands : Action[] = [];
                let actionShare = new ActionShare("share", 0.03)
                let lRead = new ActionRead("read", 0.5);
                commands.push(actionShare)
                commands.push(lRead)

                let avSeedConfig : AgentConfig = new AgentConfig(Agent.PREPARE_FOR_SHARE, commands, true, seedSize,  1, 0)

                let avrConfig : AgentConfig = new AgentConfig(Agent.NOREAD, commands, false, networkSize - seedSize,  0.1, 0)

                let agentsConfigs : AgentConfig[] = [];

                agentsConfigs.push(avSeedConfig)
                agentsConfigs.push(avrConfig)
                return new SimulationConfig(periods, networkSize, seedSize, agentsConfigs);
            }
        )
        await   experimentTwitter.run();
    }

    return (
        <Button onClick={startExperiment} color={"success"} variant="contained">
            <PlayCircleFilledWhiteIcon/>
        </Button>
    )
}