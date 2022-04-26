import {Experiment} from "./Experiment";
import {SimulationConfig} from "../util/config/SimulationConfig";
import {IDataEssential} from "../util/data/interfaces/IDataEssential";
import {IDataDetailed} from "../util/data/interfaces/IDataDetailed";
import {Environment} from "./Environment";
import {RowData} from "../util/data/RowData";

export abstract class Simulation implements IDataEssential, IDataDetailed{
    protected experiment: Experiment | undefined;
    protected simulation: Simulation | undefined;
    protected environment: Environment | undefined;
    protected simulationConfig: SimulationConfig;
    protected id: number;
    protected networkSize: number;
    protected seedSize: number;
    protected periods: number;

    protected constructor(id: number, simulationConfig: SimulationConfig) {
        this.id = id;
        this.networkSize = simulationConfig.networkSize;
        this.seedSize = simulationConfig.seedSize;
        this.periods = simulationConfig.periods;
        this.simulationConfig = simulationConfig;
    }

    public initialize() {
        this.environment.simulation = this;
    }

    DataDetailed(): RowData {
        return undefined;
    }

    DataEssential(): RowData {
        return undefined;
    }
}