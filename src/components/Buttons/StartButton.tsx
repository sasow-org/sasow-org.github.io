import {DataHandlerConfig} from "../../model/util/config/DataHandlerConfig";
import {ExperimentTwitter} from "../../model/environments/twitter/ExperimentTwitter";
import {Button} from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import React, {useState} from "react";
import {Action} from "../../model/util/actions/Action";
import {ActionShare} from "../../model/util/actions/commands/ActionShare";
import {ActionRead} from "../../model/util/actions/commands/ActionRead";
import {AgentConfig} from "../../model/util/config/AgentConfig";
import {SimulationConfig} from "../../model/util/config/SimulationConfig";
import {TwitterAgent} from "../../model/environments/twitter/TwitterAgent";

export default function StartButton(props) {

    const [experimentConfig, setExperimentConfig] = useState(props.experimentConfig)

    const repetitions : number = experimentConfig.repetitions;
    const name: string = experimentConfig.experimentName
    const description: string = experimentConfig.description
    const dataHandlerConfig: DataHandlerConfig = new DataHandlerConfig(name, experimentConfig.essentialData, experimentConfig.detailedData);

    const startExperiment = async () =>  {
        let experimentTwitter : ExperimentTwitter = new ExperimentTwitter(repetitions, name, description, dataHandlerConfig,
            () => {
                const networkSize : number = props.experimentConfig.networkSize;
                const seedSize: number = props.experimentConfig.seedSize;
                const periods : number = props.experimentConfig.periods;


                console.log(props.experimentConfig)



                //let actionShare = new ActionShare("share", 0.03)
                //let lRead = new ActionRead("read", 0.5);
                //commands.push(actionShare)
                //commands.push(lRead)

                //let avSeedConfig : AgentConfig = new AgentConfig(Agent.PREPARE_FOR_SHARE, commands, true, seedSize,  1, 0)

                //let avrConfig : AgentConfig = new AgentConfig(Agent.NOREAD, commands, false, networkSize - seedSize,  0.1, 0)

                let agentsConfigs : AgentConfig[] = [];

                props.experimentConfig.agentsConfigs.map( (agentConfig) => {

                    console.log(agentConfig)

                    let commands : Action[] = [];
                    agentConfig.actions.map(  (action) => {
                        if(action.type === "ActionRead"){
                            commands.push(new ActionRead(action.name, action.probability))
                        }

                        if(action.type === "ActionShare"){
                            commands.push(new ActionShare(action.name, action.probability))
                        }

                        return
                    })

                    if(agentConfig.agentType === "TwitterAgent"){
                        let auxConfig : AgentConfig = new AgentConfig(
                            agentConfig.configName,
                            agentConfig.initialState,
                            commands,
                            agentConfig.isSeed,
                            agentConfig.quantityAgent,
                            agentConfig.percentageFollowers,
                            agentConfig.percentageFollowings
                        )
                        agentsConfigs.push(auxConfig)
                    }

                    console.log(commands)
                    console.log(agentsConfigs)

                    return
                })

                //agentsConfigs.push(avSeedConfig)
                //agentsConfigs.push(avrConfig)
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