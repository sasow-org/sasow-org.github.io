import {Experiment} from "../../essential/Experiment";
import {DataHandlerConfig} from "../../util/config/DataHandlerConfig";
import {SimulationTwitter} from "./SimulationTwitter";
import {DataHandler} from "../../util/datahandler/DataHandler";
import {Action} from "../../util/actions/Action";
import {ActionShare} from "../../util/actions/commands/ActionShare";
import {ActionRead} from "../../util/actions/commands/ActionRead";
import {AgentConfig} from "../../util/config/AgentConfig";
import {SimulationConfig} from "../../util/config/SimulationConfig";
import {Agent} from "../../essential/Agent";

export class ExperimentTwitter extends Experiment{

    constructor(repetitions: number, name: string, description : string, dataHandlerConfig : DataHandlerConfig, doConfig: Function) {
        super(repetitions, name, description, dataHandlerConfig, doConfig);
    }



    initialize(id: number): void {
        console.log("Inicializando experiment twitter, id: ", id)
        this.simulation = new SimulationTwitter(id, this.simulationConfig);
        this.simulation.initialize();
        DataHandler.getInstance().experiment = this;
        DataHandler.getInstance().simulation = this.simulation;
        DataHandler.getInstance().environment = this.simulation.environment;
    }

}