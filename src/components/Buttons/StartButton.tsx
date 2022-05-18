import {DataHandlerConfig} from "../../model/util/config/DataHandlerConfig";
import {Button} from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import React, {useState} from "react";
import {Action} from "../../model/util/actions/Action";
import {ActionShare} from "../../model/util/actions/commands/ActionShare";
import {ActionRead} from "../../model/util/actions/commands/ActionRead";
import {AgentConfig} from "../../model/util/config/AgentConfig";
import {SimulationConfig} from "../../model/util/config/SimulationConfig";
import {TwitterAgent} from "../../model/environments/twitter/TwitterAgent";
import {GenericExperiment} from "../../model/essential/GenericExperiment";
import * as ts from "typescript"

export default function StartButton(props) {

    const [experimentConfig, setExperimentConfig] = useState(props.experimentConfig)

    const repetitions : number = experimentConfig.repetitions;
    const name: string = experimentConfig.experimentName
    const description: string = experimentConfig.description
    const dataHandlerConfig: DataHandlerConfig = new DataHandlerConfig(name, experimentConfig.essentialData, experimentConfig.detailedData);

    const startExperiment = async () =>  {
        let experiment : GenericExperiment = new GenericExperiment(repetitions, name, description, dataHandlerConfig,
            () => {
                const networkSize : number = props.experimentConfig.networkSize;
                const seedSize: number = props.experimentConfig.seedSize;
                const periods : number = props.experimentConfig.periods;

                console.log(props.experimentConfig)

                let agentsConfigs : AgentConfig[] = [];
                //Por cada agent config
                props.experimentConfig.agentsConfigs.forEach((agentConfig) => {

                    console.log(agentConfig)
                    //Crea sus comandos.
                    let commands : Action[] = [];
                    agentConfig.actions.forEach( async (action) => {
                        let actionString = "new "+action.type+"("+action.name+", "+ action.probability+")";
                        //let result = ts.transpile(actionString)
                        //let runnable : any = eval(result)
                        //runnable.Run("RUN!").then((result) => {commands.push(result)})
                        //commands.push();
                        let action2String = "commands.push("+actionString+");"
                        eval(actionString);
                    })

                    //Crea la configuracion, seteando lo siguiente
                    //--> configName
                    //--> initalState
                    //--> commands
                    //--> si es seed
                    //--> cantidad de ese agente (esto se calcula mediante porcentage * networkSize)
                    //--> porcentage de seguidores y seguidos
                    let auxConfig : AgentConfig = new AgentConfig(
                        agentConfig.configName,
                        agentConfig.initialState,
                        commands,
                        agentConfig.isSeed,
                        agentConfig.quantityAgent,
                        agentConfig.percentageFollowers,
                        agentConfig.percentageFollowings
                    )
                    //agrega esta nueva cofiguracion a la lista de configs de agentes
                    agentsConfigs.push(auxConfig)

                    //muestra la data
                    console.log("Commands: ", commands)// --> si bien funciona, al usar eval, esto no pasa.
                    console.log("Agent Configs: ", agentsConfigs)

                })

                return new SimulationConfig(periods, networkSize, seedSize, agentsConfigs);//Envia la simulation config
            }
        )
        await   experiment.run();
    }

    return (
        <Button onClick={startExperiment} color={"success"} variant="contained">
            <PlayCircleFilledWhiteIcon/>
        </Button>
    )
}