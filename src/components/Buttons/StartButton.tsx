import {DataHandlerConfig} from "../../model/util/config/DataHandlerConfig";
import {Button} from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import React, {useState} from "react";
import {ExperimentFactory} from "../../model/util/factory/ExperimentFactory";
import {ExperimentConfigData} from "../../model/util/config/data/ExperimentConfigData";
import {AgentConfigData} from "../../model/util/config/data/AgentConfigData";
import {ActionConfigData} from "../../model/util/config/data/ActionConfigData";

export default function StartButton(props) {

    const [experimentConfig, setExperimentConfig] = useState(props.experimentConfig)

    const repetitions : number = experimentConfig.repetitions;
    const name: string = experimentConfig.experimentName;
    const description: string = experimentConfig.description;

    function getAgentConfigData() : AgentConfigData[] {
        let configData :AgentConfigData[] = []

        experimentConfig.agentsConfigs.forEach((agentConfig) => {

            let actions : ActionConfigData[] = []
            agentConfig.actions.forEach((action) => {
                actions.push(new ActionConfigData(action.name, action.probability, action.type))
            })
            console.log("agentConfig: ", agentConfig)
            configData.push(
                new AgentConfigData(
                    agentConfig.agentType,
                    agentConfig.configName,
                    agentConfig.initialState,
                    actions,
                    agentConfig.isSeed,
                    agentConfig.quantityAgent,
                    agentConfig.percentageFollowers,
                    agentConfig.percentageFollowings
                ))
        })

        return configData;
    }

    const startExperiment = async () =>  {
        const agentConfigsData : AgentConfigData[] = getAgentConfigData()

        const experimentConfigData : ExperimentConfigData = new ExperimentConfigData(
            experimentConfig.experimentType,
            name,
            description,
            repetitions,
            experimentConfig.essentialData,
            experimentConfig.detailedData,
            experimentConfig.periods,
            experimentConfig.networkSize,
            experimentConfig.seedSize,
            agentConfigsData
        )

        let experimentFactory :  ExperimentFactory = new ExperimentFactory();
        await experimentFactory.createExperiment(
            experimentConfigData
        ).run();
    }

    return (
        <Button onClick={startExperiment} color={"success"} variant="contained">
            <PlayCircleFilledWhiteIcon/>
        </Button>
    )
}