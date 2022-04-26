import {Simulation} from "../../essential/Simulation";
import {SimulationConfig} from "../../util/config/SimulationConfig";

export class SimulationTwitter extends Simulation {

    constructor(id: number, simulationConfig: SimulationConfig) {
        super(id, simulationConfig);
    }

    run(): void {
        console.log("Starting Run in Simulation id: "+this._id)
        this.environment.run();
        console.log("Ending Run in Simulation id: "+this._id)
    }



}