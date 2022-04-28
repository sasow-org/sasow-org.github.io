import {Simulation} from "../../essential/Simulation";
import {SimulationConfig} from "../../util/config/SimulationConfig";
import {EnvironmentTwitter} from "./EnvironmentTwitter";

export class SimulationTwitter extends Simulation {

    constructor(id: number, simulationConfig: SimulationConfig) {
        super(id, simulationConfig);
        this._environment = new EnvironmentTwitter(id, simulationConfig.periods, simulationConfig.networkSize, simulationConfig.seedSize, simulationConfig.agentsConfigs);
    }

    run(): void {
        console.log("Starting Run in Simulation id: "+this._id)
        this.environment.run();
        console.log("Ending Run in Simulation id: "+this._id)
    }



}